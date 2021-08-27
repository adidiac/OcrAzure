'use strict';
const dontev=require('dotenv').config();

const async = require('async');
const https = require('https');
const path = require("path");
const createReadStream = require('fs').createReadStream
const sleep = require('util').promisify(setTimeout);
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

/**
 * AUTHENTICATE
 * This single client is used for all examples.
 */
const key = process.env.KEY;
const endpoint =  process.env.ENDPOINT;


const computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);



const STATUS_SUCCEEDED = "succeeded";
const STATUS_FAILED = "failed"

function printRecText(readResults,response) {
  let total=''; 
  total+='Recognized text:\n';
  for (const page in readResults) {
    if (readResults.length > 1) {
      total+=(`==== Page: ${page}\n`);
    }
    const result = readResults[page];
    if (result.lines.length) {
      for (const line of result.lines) {
        total+=line.words.map(w => w.text).join(' ');
        total+="\n"
      }
    }
    else { total+=('No recognized text.\n'); }
  }
  response.send(total);
}

async function readTextFromURL(client, url) {
  // To recognize text in a local image, replace client.read() with readTextInStream() as shown:
  let result = await client.readInStream(()=>createReadStream(url))
  // Operation ID is last path segment of operationLocation (a URL)
  let operation = result.operationLocation.split('/').slice(-1)[0];

  // Wait for read recognition to complete
  // result.status is initially undefined, since it's the result of read
  while (result.status !== STATUS_SUCCEEDED) { await sleep(1000); result = await client.getReadResult(operation); }
  return result.analyzeResult.readResults; // Return the first page of result. Replace [0] with the desired page if this is a multi-page file such as .pdf or .tiff.
}

const file = require('fs');
async function computerVision(response,url) {

    try {
      
      const printedResult = await readTextFromURL(computerVisionClient, url);
      printRecText(printedResult,response);
     
    } catch (error) {
        response.send(error)
    }

    file.unlinkSync(url)
    
}

module.exports={computerVision}
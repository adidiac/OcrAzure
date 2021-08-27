import LogoImage from './Logo.svg'
export default function Logo()
{
    return (
        <img src={LogoImage} style={{border:"2px solid white",borderRadius:"100%",height:50,width:50}} class="grow">
        </img>
    );
}
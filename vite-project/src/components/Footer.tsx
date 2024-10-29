import  './Footer.css';

interface objectProps
{
    facebook : string;
    instagram : string;
}
interface linkToIconsProps 
{
    linkToIcons : objectProps;
}

function Footer({linkToIcons} : linkToIconsProps)
{

    return(
            <footer>
                <p>Salut les petits loulou</p>
             <div>
                <img className= "footerImg" src={linkToIcons.facebook} alt="" />
                <img className= "footerImg" src={linkToIcons.instagram} alt="" />
            </div>
            </footer>
    );

}

export default Footer;
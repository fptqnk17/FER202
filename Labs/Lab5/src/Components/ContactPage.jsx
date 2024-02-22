import pikachu from "../assets/img/contact/pikachu_hello.gif";
import mario from "../assets/img/contact/mario_banner.gif";
import github from "../assets/img/contact/github.gif";
import facebook from "../assets/img/contact/facebook.gif";
import discord from "../assets/img/contact/discord.gif";
import linkedin from "../assets/img/contact/linkedin.gif";
import cat from "../assets/img/contact/cat.gif";
import "../assets/ContactPage.scss";

const ContactPage = () => {
    return (
        <div className='container'>
            <h1 className="center">
              <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=Hi+There!;+I'm+Quoc+Chuong!"/>
              <img src={pikachu} width="85" alt="pikachu_hello"/>&nbsp;
            </h1>

            <br/>
            <img align="right" alt="Coding" width="600" height="350" src={mario}></img>
            <br/>
            <h1><img src={cat} width="40" height="40"/>  Contact with me </h1>
            <br/>
            <div className="gif-contact">
                <a href="https://github.com/bakaqc" target="_blank" rel="noreferrer">
                    <img src={github} alt="github"/>
                </a>
                <a href="https://www.facebook.com/dqchuongbk" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="facebook"/>
                </a>
                <a href="https://www.linkedin.com/in/bakaqc" target="_blank" rel="noreferrer">
                    <img src={linkedin}  alt="linkedin"/>
                </a>
                <a href="https://discord.gg/6MyfJvTe" target="_blank" rel="noreferrer">
                    <img src={discord}  alt="discord"/>
                </a>
            </div>
        </div>
    );
}

export default ContactPage;
import pikachu from "../assets/img/contact/pikachu_hello.gif";
import mario from "../assets/img/contact/mario_banner.gif";
import github from "../assets/img/contact/github.gif";
import facebook from "../assets/img/contact/facebook.gif";
import discord from "../assets/img/contact/discord.gif";
import linkedin from "../assets/img/contact/linkedin.gif";
import cat from "../assets/img/contact/cat.gif";
import hi from "../assets/img/contact/hithere.svg";
import donate from "../assets/img/contact/donate.png";
import "../assets/AboutPage.scss";

const ContactPage = () => {
  return (
    <div className="container">
      <h1 className="center">
        <img src={hi} />
        <img src={pikachu} width="85" alt="pikachu_hello" />
        &nbsp;
      </h1>
      <br />
      <div className="infor">
        <div className="about">
          <h1>About Me</h1>
          <ul>
            <li>
              🎓 I&apos;m a student at{" "}
              <strong>FPT University Quy Nhơn AI Campus</strong>.
            </li>
            <li>
              🔭 I&apos;m currently learning{" "}
              <strong>Java, React, Node.js</strong>
            </li>
            <li>❤️ I&apos;m passionate about:</li>
            <ul>
              <li>🪐 Operating Systems (Windows)</li>
              <li>🖥️ Website Developer</li>
            </ul>
          </ul>
          <br />
          <br />
        </div>

        <img
          className="mario-gif"
          align="right"
          alt="Coding"
          width="550"
          height="350"
          src={mario}
        ></img>
      </div>
      <h1>
        <img src={cat} width="40" height="40" /> 
        Connect with me{" "}
      </h1>
      <br />
      <div className="gif-contact">
        <a href="https://github.com/bakaqc" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.facebook.com/dqchuongbk"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/bakaqc"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://discord.gg/6MyfJvTe" target="_blank" rel="noreferrer">
          <img src={discord} alt="discord" />
        </a>
      </div>
      <div className="donate">
        <a href="https://ko-fi.com/bakaqc" target="_blank" rel="noreferrer">
          <img
          className="donateImage"
            align="left"
            src={donate}
            height="50"
            width="210"
            alt="baka"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;

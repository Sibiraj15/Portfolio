
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/sibirajLogo1.webp";
import { FaSquareXTwitter } from "react-icons/fa6";
 const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} className="mx-2 " width={75} height={75} alt="logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/sibiraj05/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin">
                <FaLinkedin />
            </a>
            <a href="https://github.com/Sibiraj15"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/frnds_cl_me_idiot_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
                <FaInstagram />
            </a>
            <a href="https://x.com/s_strangercb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter">
                <FaSquareXTwitter />
            </a>
        </div>
    </nav>
  )
}
export default NavBar
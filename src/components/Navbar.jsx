import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/marivateLogo.png";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-24" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/thianzi-rambau-582b6b31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Rambauthianzi" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/tee.rambau?igsh=MXg0cG9rZ3Vxa2lo&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

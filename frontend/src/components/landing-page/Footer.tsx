import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col p-3">
      <hr className="p-1" />
      <span className="text-md font-semibold text-black p-1">Docs Editor</span>
      <span className="text-gray-500 p-1">Follow for project updates</span>
      <div className="flex flex-row p-1 gap-4 text-2xl">
        <div className="text-blue-500">
          <FaLinkedin />
        </div>
        <FaGithub />
      </div>
    </div>
  );
};

export default Footer;

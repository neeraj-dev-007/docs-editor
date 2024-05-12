import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="flex flex-row p-5 justify-between">
      <div className="flex font-bold">
        <span>Docs Editor</span>
      </div>
      <div className="flex max-w-10">
        <Avatar />
      </div>
    </div>
  );
};

export default Header;

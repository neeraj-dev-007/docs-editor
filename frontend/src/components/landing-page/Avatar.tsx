import AvatarImage from "../../assets/avatar.svg";

const Avatar = () => {
  return (
    <div className="flex rounded-full border-green-600 border-2">
      <img src={AvatarImage} alt="User Avatar" />
    </div>
  );
};

export default Avatar;

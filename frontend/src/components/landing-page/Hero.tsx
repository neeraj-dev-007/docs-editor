const Hero = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <span className="font-bold text-5xl p-3">Docs Editor</span>
      <span className="text-gray-500 text-2xl p-3">
        Edit documents yourself and collaborate with team
      </span>
      <button className="text-white bg-black hover:bg-gray-800 p-3 rounded-lg">
        Create New Document
      </button>
    </div>
  );
};

export default Hero;

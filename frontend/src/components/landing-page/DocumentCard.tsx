const DocumentCard = (props): JSX.Element => {
  return (
    <div className="flex flex-col shadow-md gap-1 px-4 py-4 w-full h-[380px]">
      <div className="h-[300px]">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <span className="text-md text-black">{props.title}</span>
      <span className="text-md text-gray-500">Opened {props.date}</span>
    </div>
  );
};

export default DocumentCard;

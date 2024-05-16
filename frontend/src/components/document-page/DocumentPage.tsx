import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const DocumentPage = () => {
  return (
    <ReactQuill theme="snow" className="m-5">
      <div
        className="mx-auto my-4 bg-white h-[11in] w-[8.5in] p-[1in] shadow-md shadow-gray-700 object-center"
      ></div>
    </ReactQuill>
  );
};

export default DocumentPage;

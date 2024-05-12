import Mobile from "../../assets/mobile.svg";
import Desktop from "../../assets/desktop.svg";
import Document1 from "../../assets/Real Estate Brochure.png";
import Document2 from "../../assets/To Do list.png";
import Document3 from "../../assets/Certificate.png";
import DocumentCard from "./DocumentCard";

const Content = () => {
  return (
    <div className="flex flex-col my-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xl font-bold">Access Anytime, Anywhere</span>
          <img src={Mobile} alt="Mobile Screen" height={400} />
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-xl font-bold">
            Edit Seamlessly and Collaborate in Real-time
          </span>
          <img src={Desktop} alt="Mobile Screen" height={400} />
        </div>
      </div>
      <div className="my-10 flex flex-col px-3 pt-10">
        <span className="font-bold text-2xl pb-5">Recent Documents</span>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] items-center gap-10 py-2 ">
          <DocumentCard
            image={Document1}
            title={"Real Estate Brochure"}
            date={"18:50"}
          />
          <DocumentCard
            image={Document2}
            title={"To Do List"}
            date={"10 May 2024"}
          />
          <DocumentCard
            image={Document3}
            title={"Project Manager Certificate"}
            date={"21 Apr 2024"}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

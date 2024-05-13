import { useState } from "react";
import { FaRedo } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { ImIndentIncrease } from "react-icons/im";
import { ImIndentDecrease } from "react-icons/im";

function App() {
  const [bold, setBold] = useState(false);

  return (
    <div className="flex flex-col gap-5 m-10">
      <div className="flex flex-row gap-3">
        <button>
          <FaRedo />
        </button>
        <button>
          <FaUndo />
        </button>
        <button
          className={
            bold
              ? "bg-gray-700 text-white p-2"
              : "text-black p-2 hover:bg-gray-400"
          }
          onClick={() => (bold ? setBold(false) : setBold(true))}
        >
          <FaBold />
        </button>
        <button>
          <FaItalic />
        </button>
        <button>
          <FaUnderline />
        </button>
        <button>
          <FaAlignCenter />
        </button>
        <button>
          <FaAlignJustify />
        </button>
        <button>
          <FaAlignLeft />
        </button>
        <button>
          <FaAlignRight />
        </button>
        <button>
          <FaListOl />
        </button>
        <button>
          <FaListUl />
        </button>
        <button>
          <ImIndentDecrease />
        </button>
        <button>
          <ImIndentIncrease />
        </button>
      </div>
      <div>
        <div
          contentEditable="true"
          className="flex border-2 border-black rounded-2xl absolute w-full max-w-[95%] h-full max-h-[80%] mt-10 p-5"
        ></div>
      </div>
    </div>
  );
}

export default App;

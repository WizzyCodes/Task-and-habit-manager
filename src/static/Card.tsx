import { FC } from "react";
import { iCard, iComp } from "../utils/interfaces";
import { moveToDoneX, moveToProgressX, removeFromDoneX } from "../utils/helper";

const Card: FC<iComp> = ({ el, idx, data, setData }) => {
  return (
    <div className="w-[300px] h-[140px] border rounded-md bg-white p-2 shadow-inner my-4 flex flex-col">
      {el.title}

      <div className="flex-1" />
      {idx === 0 ? (
        <div className="flex justify-end">
          <button
            className="text-white bg-blue-950 px-5 mr-1 py-2 rounded-md text-[12px]"
            onClick={() => moveToProgressX(el, data, setData)}
          >
            Add to Progress
          </button>
        </div>
      ) : idx === 1 ? (
        <div className="flex justify-end">
          <button
            className="text-white bg-green-500 px-5 mr-1 py-2 rounded-md text-[12px]"
            onClick={() => moveToDoneX(el, data, setData)}
          >
            Add to Done
          </button>
        </div>
      ) : idx === 2 ? (
        <div className="flex justify-end">
          <button
            className="text-white bg-red-500 px-5 mr-1 py-2 rounded-md text-[12px]"
            onClick={() => removeFromDoneX(el, data, setData)}
          >
            Remove from Queue
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Card;

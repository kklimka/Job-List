import locations from "../assepts/icons/Location.svg";
import save from "../assepts/icons/Save.svg";
import DataTypes from "../types/DataTypes";
import { Link } from "react-router-dom";

type AppProps = {
  item: DataTypes;
  setDetailedJob: React.Dispatch<React.SetStateAction<DataTypes>>;
};
function JobListCard({ item, setDetailedJob }: AppProps) {
  return (
    <Link to="/detailed">
      <div
        className="min-h-48 shadow-lg shadow-indigo-500/40 flex flex-nowrap justify-between w-[95vw] bg-white shadow-gray-100 rounded-xl mt-5 md:w-[80vw]  max-md:bg-gray-200 max-sm:grid grid-cols-[75px_minmax(50px,_100px)_minmax(20px,_1fr)] grid-rows-[50px_minmax(90px,_1fr)] gap-0"
        onClick={() => {
          setDetailedJob(item);
        }}
      >
        <div className="mt-2 mb-2 flex items-center pl-2 max-sm:items-start row-start-2 pr-2 max-sm:mt-0 max-sm:mb-0">
          <img
            alt="logo"
            src={item.pictures?.[0]}
            className="rounded-full h-[85px] w-[85px] max-sm:h-[65px] max-sm:w-[65px]"
          />
        </div>
        <div className="w-[40vw] flex flex-col justify-around justify-items-start max-sm:w-[100%] row-start-2 col-start-2 col-end-4 max-ms:flex max-ms:justify-start">
          <h2 className="text-fuchsia-900 font-medium text-base">
            {item.title}
          </h2>
          <div className="max-ms:flex justify-start">
            <p className="text-slate-400 pt-1">Department name • {item.name}</p>
            <p className="flex flex-nowrap text-slate-400 pt-1">
              <img alt="logo" src={locations} className="h-6 w-5 pr-2" />
              {item.address}
            </p>
          </div>
        </div>
        <div className="flex items-center  max-sm:items-start pt-1 col-start-2 ">
          &#9733; &#9733; &#9733; &#9733; &#9733;
        </div>
        <div className="flex flex-col-reverse pt-1 max-sm:flex-col ">
          <div className="flex items-end h-[100%] pr-4 max-sm:col-start-3 justify-end  ">
            <p className="text-base text-slate-400 max-sm:text-sm">
              Posted 2 days ago
            </p>
          </div>
          <div className="flex justify-end items-start pr-4 opacity-100 max-sm:opacity-0 col-start-1">
            <img src={save} alt="icon" />
          </div>
        </div>
      </div>
    </Link>
  );
}
export default JobListCard;

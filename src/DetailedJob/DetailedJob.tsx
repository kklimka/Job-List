import save from "../assepts/icons/Save.svg";
import share from "../assepts/icons/Share.svg";
import Arrow from "../assepts/icons/Arrow.svg";
import locations from "../assepts/icons/Location.svg";
import { Link } from "react-router-dom";
import DataTypes from "../types/DataTypes";
type AppProps = {
  detailedJob: DataTypes;
};

function DetailedJob({ detailedJob }: AppProps) {
  const howLongIsText = detailedJob.description?.split("\n");
  const descriptionJobText: Array<string> = [];
  howLongIsText?.map((item) => {
    if (item.replace(/\s/g, "").length > 3) {
      descriptionJobText.push(item);
    }
    return true;
  });
  const posted = detailedJob.updatedAt?.slice(0, 10);

  return (
    <div className="overflow-auto h-[100vh] md:scrollbar scrollbar-thumb-zinc-400 scrollbar-track-gray-100">
      <Link to="/">
        <button className="ml-20 mt-5 mb-5 bg-slate-200 w-72 h-14 rounded-xl max-md:ml-5 max-sm:w-52 max-sm:ml-2 ">
          <div className="flex justify-center">
            <img src={Arrow} alt="icon" className="pr-5 pt-1 max-sm:pr-2" />
            <span className="font-semibold max-sm:font-normal">
              RETURN TO JOB BOARD
            </span>
          </div>
        </button>
      </Link>

      <div className="flex justify-center flex-wrap">
        <div className="flex justify-center text-cyan-800 font-normal max-md:block">
          <section className=" mr-20 w-[50vw] max-md:w-[90vw] max-md:mr-0">
            <header className="flex justify-between border-b-2 max-sm:block">
              <h1 className="text-2xl font-bold">Job Details</h1>
              <div>
                <ul className="flex pt-1">
                  <li className="flex pr-5">
                    <img
                      src={save}
                      alt="icon"
                      className="pr-2"
                      height="27px"
                      width="27px"
                    />
                    Save to my list
                  </li>
                  <li className="flex">
                    <img src={share} alt="icon" className="pr-2" />
                    Share
                  </li>
                </ul>
              </div>
            </header>
            <section>
              <button className="bg-slate-600 text-white w-28 h-9 mt-5 mb-5 rounded-lg">
                Apply now
              </button>
              <div className="flex">
                <div>
                  <div className="flex justify-between max-sm:block">
                    <h1 className="w-[35vw] font-bold mb-1 max-md:w-[60vw] max-sm:w-[100%]">
                      {detailedJob.title}
                    </h1>
                    <div className="w-[10vw] max-md:w-[20vw] max-sm:w-[100%] mt-3 flex justify-end ">
                      <div>
                        <h3 className="font-bold">€ {detailedJob.salary}</h3>
                        <p>Brutto, per year</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-base text-slate-400 mb-1 max-sm:mb-10 max-sm:mt-[-35px]">
                    Posted {posted}
                  </p>
                  <div>
                    <div>{descriptionJobText?.[0]}</div>
                    <div className="font-bold">{descriptionJobText?.[1]}</div>
                    <div>{descriptionJobText?.[2]}</div>
                    <div className="font-bold">{descriptionJobText?.[3]}</div>
                    <div>{descriptionJobText?.[4]}</div>
                  </div>
                  <button className="bg-slate-600 text-white w-28 h-9 mt-5 mb-5 rounded-lg">
                    Apply now
                  </button>
                  <h2 className="border-b-2 font-bold text-2xl">
                    Additional info
                  </h2>
                  <h4 className="text-lg mt-3 mb-2">Employment type</h4>
                  {detailedJob.employment_type?.map((type) => {
                    return (
                      <button
                        className="bg-violet-200 w-40 h-10 border-2 border-violet-300 rounded shadow-md mr-5 mb-3"
                        key={Math.random()}
                      >
                        {type}
                      </button>
                    );
                  })}

                  <h4 className="text-lg mt-3 mb-2">Benefits</h4>
                  {detailedJob.benefits?.map((benefits) => {
                    return (
                      <button
                        className="bg-amber-200 w-40 h-10 border-2 border-amber-300 rounded shadow-md mr-5 mb-3"
                        key={Math.random()}
                      >
                        {benefits}
                      </button>
                    );
                  })}
                </div>
              </div>
              <h2 className="border-b-2 font-bold text-2xl mt-3 mb-4">
                Attached images
              </h2>
              <div className="flex flex-wrap justify-center">
                {detailedJob.pictures?.map((pictures) => {
                  return (
                    <img
                      src={pictures}
                      alt="pictures"
                      className="mr-4 rounded-lg mb-5"
                      key={Math.random()}
                    />
                  );
                })}
              </div>
            </section>
          </section>
          <div className="max-md:mt-10">
            <address className="w-[20vw] mt-10 max-md:w-[100%] max-md:mt-0">
              <ul className=" bg-slate-800 text-white rounded-xl shadow-md p-5 ">
                <li>
                  <h2>Department name:</h2>
                </li>
                <li>
                  <h2>{detailedJob.name}</h2>
                </li>
                <li className="flex">
                  <img src={locations} alt="icon" className="mr-1" />
                  {detailedJob.address}
                </li>
                <li>{detailedJob.phone}</li>
                <li>{detailedJob.email}</li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailedJob;

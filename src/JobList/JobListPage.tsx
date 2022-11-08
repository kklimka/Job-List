import JobListCard from "./JobListCard";
import DataTypes from "../types/DataTypes";
import { useState } from "react";
type AppProps = {
  workList: Array<DataTypes>;
  setDetailedJob: React.Dispatch<React.SetStateAction<object>>;
};

function JobListPage({ workList, setDetailedJob }: AppProps) {
  const showJobOnPage = 5;
  const [jobsOnPage, setJobsOnPage] = useState<number>(showJobOnPage);
  const newWorkList = workList.slice(0, jobsOnPage);

  return (
    <section className="overflow-auto h-[100vh] bg-slate-300 md:scrollbar scrollbar-thumb-zinc-400 scrollbar-track-gray-100 ">
      <div className="flex flex-col items-center">
        {newWorkList.map((item) => {
          return (
            <JobListCard
              item={item}
              key={item.id}
              setDetailedJob={setDetailedJob}
            />
          );
        })}
        <div>
          <button
            disabled={jobsOnPage === workList.length}
            className="bg-slate-600 text-white text-lg font-medium w-52 h-14 mt-5 mb-5 rounded-lg disabled:opacity-50"
            onClick={() => {
              setJobsOnPage(jobsOnPage + showJobOnPage);
            }}
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
export default JobListPage;

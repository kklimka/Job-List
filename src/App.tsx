import React, { useEffect, useState } from "react";
import JobListPage from "./JobList/JobListPage";
import axios from "axios";
import DataTypes from "./types/DataTypes";
import { Routes, Route } from "react-router-dom";
import DetailedJob from "./DetailedJob/DetailedJob";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [workList, setWorkList] = useState<Array<DataTypes>>([]);
  const [detailedJob, setDetailedJob] = useLocalStorageState<DataTypes>(
    "detailedJob",
    {
      defaultValue: {},
    }
  );

  const url: string =
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
  useEffect(() => {
    axios.get(url).then((res) => {
      setWorkList(res.data);
    });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <JobListPage workList={workList} setDetailedJob={setDetailedJob} />
        }
      />
      <Route
        path="/detailed"
        element={<DetailedJob detailedJob={detailedJob} />}
      />
    </Routes>
  );
}

export default App;

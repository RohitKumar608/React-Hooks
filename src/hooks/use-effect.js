import React, { useEffect, useState, useCallback } from "react";
import CardHooks from "./cardHooks";
const useEffects = React.memo(() => {
  const [apiData, setApiData] = useState([]);
  const [userDetail, setUserDetail] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://reqres.in/api/users?page=1&per_page=12", {
        method: "GET"
      });
      let result = await data
        .text()
        .then(data => JSON.parse(data))
        .catch(err => console.log(err));
      setApiData(result.data);
    }
    fetchData();
    async function fetchUserDetail() {
      let data = await fetch(`https://reqres.in/api/users/${selectedUserId}`, {
        method: "GET"
      });
      let result = await data
        .text()
        .then(data => JSON.parse(data))
        .catch(err => console.log(err));
      setUserDetail(result.data);
    }
    fetchUserDetail();
  }, [selectedUserId]);

  const handleUserClick = useCallback(
    userId => {
      setSelectedUserId(userId);
    },
    [selectedUserId]
  );
  // const handleUserClick = userId => {
  //   setSelectedUserId(userId);
  // };

  return (
    <div className="container">
      <h4>Use Effect</h4>
      <CardHooks apiData={apiData} handleUserClick={handleUserClick} />
      <button onClick={() => handleUserClick(1)}>Click</button>
    </div>
  );
});

export default useEffects;

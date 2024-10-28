import React from 'react';
import {useEffect, useState } from 'react';
import { useCallback } from 'react';
import { initializeGrid, indexUsersById } from './help';
import Loader from './components/Spinner';
import Header from './components/Nav';
import Grid from './components/Layout';
import { fetchUrl } from './api';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [gridData, setGridData] = useState({});
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");
  const [loading, setLoading] = useState(true);

  const saveDetails = useCallback((data) => {
    for (let key in data) localStorage.setItem(key, data[key]);
  }, []);

  const loadDetails = useCallback(() => {
    setGrouping(localStorage.getItem("grouping") || "status");
    setOrdering(localStorage.getItem("ordering") || "priority");
  }, []);

  useEffect(() => {
    loadDetails();
    fetch(fetchUrl)
      .then(resp => resp.json())
      .then(res => {
        const { tickets, users } = res;
        setTickets(tickets);
        setUserInfo(indexUsersById(users));
      })
      .catch(err => {});
  }, [loadDetails]); // Added loadDetails as a dependency

  useEffect(() => {
    if (!tickets.length) return;
    setGridData(initializeGrid(tickets, grouping, ordering));
    setLoading(false);
  }, [grouping, ordering, tickets]);
  
  const handleOrderingChange = useCallback((value) => {
    setLoading(true);
    setOrdering(value);
    saveDetails({ ordering: value });
  }, [saveDetails]); // Added saveDetails as a dependency

  
  const handleGroupingChange = useCallback((value) => {
    setLoading(true);
    setGrouping(value);
    saveDetails({ grouping: value });
  }, [saveDetails]); // Added saveDetails as a dependency


  return (
    <div className="App">
      <Header grouping={grouping} setGrouping={handleGroupingChange} ordering={ordering} setOrdering={handleOrderingChange} />
      {loading ? <Loader /> : <Grid gridData={gridData} grouping={grouping} userIdToData={userInfo} />}
    </div>
  );
}

export default App;

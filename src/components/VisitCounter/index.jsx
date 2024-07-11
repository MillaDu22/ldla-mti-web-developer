import React, { useState, useEffect } from 'react';
import "./visitcounter.css";

function VisitCounter() {
  const [count, setCount] = useState(0);
  useEffect(()=> {
    const storedCount = localStorage.getItem("pageVisits");
    const initialCount = Number(storedCount) || 0;
    setCount(initialCount +1);
    localStorage.setItem("pageVisit", initialCount +1);
  },[]);
  return <div className="visit-counter">
            <i className="fa-solid fa-eye"></i>
            <p id="visits">{count}</p>
          </div>
  }
export default VisitCounter;
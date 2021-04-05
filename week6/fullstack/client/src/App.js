import React, { useState, useEffect } from "react";

function App() {
  const [lists, setList] = useState([]);

  useEffect(() => {
    fetch("/api/fullstack")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            {JSON.stringify(lists)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;





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







// function App() {
//   const [list, setList] = useState([]);
  
//   const getList = () => {
//     Axios.get("http://localhost:3001/api/fullstack").then((response) => {
//       setList(response.data);
//     });
//   };

//   return (
//     <div>
//         <h1>Fastest Cars 2020</h1>

//         <button onClick={getList}>Show Fastest Cars</button>

//         {list.map((list) => (

//   <li key={list}>list</li>
// ))}
          
//     </div>
//   )
// }
// export default App





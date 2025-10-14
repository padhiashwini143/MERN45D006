import { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      setData([res.data]); // Wrap in array since response is a single object
      console.log(res?.data);
    } catch (error) {
      console.log("error caught", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((obj) => (
          <li key={obj.id}>{obj.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
  
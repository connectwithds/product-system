import "./App.css";
import "./style.css";
import React from "react";
import ProducstList from "./component/ProducstList";
//import ProducstList from "./component/ProducstList";

function App() {
  //const [productData, setProductData] = useState([]);

  // useEffect(() => {
  //   fetch("./data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProductData(data);
  //     });
  // }, []);

  return (
    <div className="App">
      <ProducstList />
    </div>
  );
}

export default App;

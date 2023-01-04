import "./styles.css";
import axios from "axios";
import { JsonApi } from "./Service/jsonApi";

export default function App() {
  const getData = () => {
    axios.all([JsonApi.get("/posts/1"), JsonApi.get("/posts")]).then(
      axios.spread((...response) => {
        console.log(response);
      })
    );
  };

  getData();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

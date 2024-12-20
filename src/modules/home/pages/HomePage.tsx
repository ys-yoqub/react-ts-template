import { useEffect } from "react";
import api from "../../../services/api";

const HomePage = () => {
  useEffect(() => {
    api.get("users").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;

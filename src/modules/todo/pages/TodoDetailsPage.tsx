import { useEffect } from "react";

const TodoDetailsPage = () => {
  useEffect(() => {
    console.log("TodoDetailsPage mounted");
  }, []);
  return (
    <div>
      <h1>Detail page: 1</h1>
    </div>
  );
};

export default TodoDetailsPage;

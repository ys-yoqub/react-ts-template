import { useFetch } from "../../../shared/hooks/useCrud";

const HomePage = () => {
  const fetchUsers = useFetch(["users"], "/users");

  const handleRefetch = () => {
    fetchUsers.refetch();
    console.log("refetching data", fetchUsers.data);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleRefetch}>refetch data</button>
    </div>
  );
};

export default HomePage;

import AppRouter from "./router";
import Layout from "./shared/components/Layout";

const App = () => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};

export default App;

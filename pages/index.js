import Layout from "../layouts/defaultLayout";
import Home from "../components/home/home";
import Menu from "../components/menu/menu";

const Index = () => (
  <Layout>
    <Menu />
    <Home />
    <style global jsx>{`
      body {
        background: white;
      }
    `}</style>
  </Layout>
);

export default Index;

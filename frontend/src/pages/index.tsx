import HomeModel from "./model";
import HomeView from "./view";

const Home = () => {
  const homeModel = HomeModel();
  return <HomeView {...homeModel} />;
};

export default Home;

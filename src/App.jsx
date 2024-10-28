// import DaisyNav from "./components/DaisyNav/DaisyNav";

import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </div>
  );
};

export default App;
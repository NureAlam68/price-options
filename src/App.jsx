// import DaisyNav from "./components/DaisyNav/DaisyNav";

import BarChart from "./components/BarChart/BarChart";
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
      <BarChart></BarChart>
    </div>
  );
};

export default App;
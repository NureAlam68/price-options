import axios from "axios";
import { useEffect, useState } from "react";
import { PieChart as PChart, Pie } from "recharts";
import { DNA } from "react-loader-spinner";

const PieChart = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("./data.json").then((data) => setAllData(data.data));
    setLoading(false);
  }, []);

  return (
    <div>
      {loading && (
        <div className="w-[500px] mx-auto">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
      <h1 className="text-center text-5xl font-bold md:mt-[88px]">
        Track New Joins with Gender Breakdown Across the Year!
      </h1>
      <div className="md:px-[140px] md:flex items-center md:mt-[88px] gap-8">
        <div className="border h-[500px] p-8 rounded-[16px] bg-violet-700 text-white">
          <h1 className=" text-[40px] mt-10">
            Monthly Gym Membership Trends:{" "}
          </h1>
          <p className="mt-6 text-[20px] font-semibold">
            Track monthly gym membership growth with a breakdown of male and
            female joins. See trends across the year in new member sign-ups.
            Discover seasonal peaks and shifts in gym member registrations. This
            data provides insights into gender-based joining trends month by
            month.
          </p>
          <button className="px-[30px] py-[14px] rounded-[16px] bg-blue-800 text-[20px] font-bold mt-10">
            Booking
          </button>
        </div>
        <div className="mx-auto p-4">
          <PChart width={800} height={500}>
            <Pie data={allData} fill="blue" dataKey="joined"></Pie>
          </PChart>
        </div>
      </div>
    </div>
  );
};

export default PieChart;

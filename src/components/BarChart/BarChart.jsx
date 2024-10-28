import { BarChart as BChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const BarChart = () => {
    const yearlyGymMembersData = [
        { month: "Jan", joined: 50, male: 30, female: 20 },
        { month: "Feb", joined: 45, male: 25, female: 20 },
        { month: "Mar", joined: 60, male: 35, female: 25 },
        { month: "Apr", joined: 55, male: 30, female: 25 },
        { month: "May", joined: 70, male: 40, female: 30 },
        { month: "Jun", joined: 65, male: 35, female: 30 },
        { month: "Jul", joined: 80, male: 45, female: 35 },
        { month: "Aug", joined: 75, male: 40, female: 35 },
        { month: "Sep", joined: 85, male: 50, female: 35 },
        { month: "Oct", joined: 90, male: 55, female: 35 },
        { month: "Nov", joined: 95, male: 55, female: 40 },
        { month: "Dec", joined: 100, male: 60, female: 40 },
      ];
      
    return (
        <div>
            <h1 className='text-center text-5xl font-bold md:mt-[88px]'>
            Track New Joins with Gender Breakdown Across the Year!
            </h1>
            <div className='md:px-[140px] flex items-center md:mt-[88px] gap-8'>
            <div className='border h-[500px] p-8 rounded-[16px] bg-violet-700 text-white'>
            <h1 className=' text-[40px] mt-10'>Monthly Gym Membership Trends: </h1>
            <p className='mt-6 text-[20px] font-semibold'>
            Track monthly gym membership growth with a breakdown of male and female joins. See trends across the year in new member sign-ups. Discover seasonal peaks and shifts in gym member registrations. This data provides insights into gender-based joining trends month by month.
            </p>
            <button className='px-[30px] py-[14px] rounded-[16px] bg-blue-800 text-[20px] font-bold mt-10'>
                Booking
            </button>
            </div>
           <div className='mx-auto p-4'>
           <BChart width={800} height={500} data={yearlyGymMembersData}>
                <Tooltip></Tooltip>
                <Bar dataKey="joined" fill='green' stroke='green'></Bar>
                <Bar dataKey="male" fill='blue' stroke='blue'></Bar>
                <Bar dataKey="female" fill='violet' stroke='violet'></Bar>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
           </BChart>
           </div>
        </div>
        </div>
    );
};

export default BarChart;
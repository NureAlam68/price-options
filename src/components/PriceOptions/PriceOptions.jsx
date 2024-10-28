import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          id: 1,
          name: "Basic Membership",
          price: 25,
          currency: "USD",
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi"
          ]
        },
        {
          id: 2,
          name: "Standard Membership",
          price: 45,
          currency: "USD",
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "One group class per week",
            "Sauna access"
          ]
        },
        {
          id: 3,
          name: "Premium Membership",
          price: 70,
          currency: "USD",
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Unlimited group classes",
            "Personal training sessions (2 per month)",
            "Sauna and steam room access",
            "Access to swimming pool"
          ]
        },
        {
          id: 4,
          name: "VIP Membership",
          price: 100,
          currency: "USD",
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Unlimited group classes",
            "Personal training sessions (4 per month)",
            "Sauna and steam room access",
            "Access to swimming pool",
            "VIP lounge access",
            "Priority booking for equipment"
          ]
        },
        {
          id: 5,
          name: "Weekend Warrior",
          price: 15,
          currency: "USD",
          features: [
            "Access to gym equipment on weekends",
            "Locker room access",
            "Free Wi-Fi",
            "Discounted weekday access"
          ]
        },
        {
          id: 6,
          name: "Family Package",
          price: 120,
          currency: "USD",
          features: [
            "Access for up to 4 family members",
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "One group class per family member per week",
            "Sauna access",
            "Access to swimming pool"
          ]
        }
      ];
      
    return (
        <div className="md:mt-[88px] md:px-[140px] mt-10">
            <h1 className="md:text-6xl text-4xl font-bold text-center">
                Best price in the town.
            </h1>
            <p className="mt-4 text-base text-center px-10 md:text-[20px] md:mt-8 md:font-semibold font-medium">
            Offering the most competitive rates, our memberships deliver top-tier fitness facilities and services, ensuring the best value for all your wellness needs.
            </p>
           <div className="grid md:grid-cols-3 gap-6 mt-10 md:mt-[60px] px-10">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;
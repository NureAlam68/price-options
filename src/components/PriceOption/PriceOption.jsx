import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className="bg-blue-500 p-6 pb-10 text-white rounded-[16px] flex flex-col">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">
                    {price}
                </span>
                <span className="text-3xl font-medium">
                    /mon
                </span>
            </h2>
            <h4 className="text-center text-4xl font-bold mt-8">{name}</h4>
            <div className="mt-8 flex-grow">
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className="bg-violet-700 w-full font-bold rounded-lg hover:bg-violet-900 py-3 mt-8 text-[18px]">
                Buy Now
            </button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;
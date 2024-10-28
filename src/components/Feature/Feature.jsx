import PropTypes from "prop-types";
import { GiCheckMark } from "react-icons/gi";

const Feature = ({feature}) => {
    return (
        <div className="md:pl-[70px] pl-10">
            <p className="text-[18px] font-medium flex items-center gap-2"><GiCheckMark />
            {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;
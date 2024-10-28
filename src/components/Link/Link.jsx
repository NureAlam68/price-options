import PropTypes from 'prop-types';

const Link = ({route}) => {
  return (
    <li className='hover:bg-blue-600  hover:rounded px-3 hover:text-white md:mr-20'>
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;

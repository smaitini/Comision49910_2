const NavLink = ({href, text}) => {

    return (
      <a
        className="text-white hover:text-red-200 text-lg font-semibold"
        href={href}
      >
        {text}
      </a>
    );
  };
  
  export default NavLink;
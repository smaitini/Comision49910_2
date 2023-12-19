
const Boton = ({ children, className = "", onClick }) => {

  return (
    <button
        onClick={onClick}
      // className={`bg-grey-400 rounded flex items-center py-2 px-4 text-center text-white font-semibold my-4 ${className}`}
      className={className}
    >
      {children}
    </button>
  );
};

export default Boton;
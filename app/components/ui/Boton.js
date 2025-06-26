"use client";
const Boton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6 rounded-xl font-semibold transition-colors cursor-pointer ${className}`}
      style={{
        backgroundColor: "#8B2C2C",
        color: "#F5EFE6",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "#641B1B")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "#8B2C2C")
      }
    >
      {children}
    </button>
  );
};

export default Boton;

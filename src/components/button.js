import { useState } from "react";

const Button = () => {
  const [changeColor, setChangeColor] = useState("aquamarine");

  const handleClick = () => {
    setChangeColor("aqua");
  };

  return (
    <button
      className="button"
      style={{ backgroundColor: changeColor }}
      onClick={handleClick}
    >
      Button
    </button>
  );
};

export default Button;

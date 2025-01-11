import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="text-6xl font-bold text-amber-600 cursor-pointer "
    >
      Dreams Of Ftm's
    </div>
  );
};

export default NavbarLeft;

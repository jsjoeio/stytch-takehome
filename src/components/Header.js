import React from "react";
import { useStytch } from "@stytch/react";

const Header = () => {
  const stytch = useStytch();
  return (
    <div className="flex justify-between bg-blue-500 p-4">
      <div className="text-white text-lg font-semibold">
        Ahsoka Super Fan App
      </div>
      <button
        className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white"
        onClick={() => stytch.session.revoke()}
      >
        Log out
      </button>
    </div>
  );
};

export default Header;

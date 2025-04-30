import React from "react";
import Heading from "../ui/Heading";
import Text from "../ui/Text";

function Header({ children }) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col">
        <Heading size="20" color="black" className="font-bold">
          Unit no
        </Heading>
        <Text size="14" color="black" className="font-medium">
          Status
        </Text>
      </div>
      <div className="flex gap-2">
        {children}
      </div>
    </div>
  );
}

export default Header;

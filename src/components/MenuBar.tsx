import { ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import MenuProps from "../entities/menu";

const MenuBar = ({ menu }: MenuProps) => {
  return menu.map((item) => {
    return (
      <ListItem
        key={item.id}
        _hover={{
          transition: " 0.3s ease",
          color: "hsl(5, 85%, 63%)",
        }}
        fontFamily="inter-regular"
        fontSize="sm"
        p={3}
      >
        <NavLink to={`${item.path}`} >
          {item.name}
        </NavLink>
      </ListItem>
    );
  });
};

export default MenuBar;

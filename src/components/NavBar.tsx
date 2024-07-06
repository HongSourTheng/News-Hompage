import { Image, List, ListItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
import menuItem from "../data/menus";
import PopUpMenu from "./PopUpMenu";
import MenuBar from "./MenuBar";
import Responsive from "./Responsive";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Responsive mt={1}>
      <List>
        <ListItem>
          <Image cursor="pointer" src={logo} alt="logo" boxSize="35px" />
        </ListItem>
      </List>
      <List display="flex" cursor="pointer">
        <Show below="sm">
          <PopUpMenu toggle={toggle} onRemove={() => setToggle(!toggle)} menu={menuItem} />
        </Show>
        <Show above="sm">
          <MenuBar menu={menuItem} />
        </Show>
      </List>
    </Responsive>
  );
};

export default NavBar;

import { Center, HStack, Image, List, ListItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
import menuItem from "../data/menu";
import PopUpMenu from "./PopUpMenu";
import MenuBar from "./MenuBar";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Center>
      <HStack
        justifyContent="space-between"
        w={{
          base: "96%",
          sm: "80%",
        }}
        mt={1}
      >
        <List>
          <ListItem>
            <Image cursor="pointer" src={logo} alt="logo" boxSize="35px" />
          </ListItem>
        </List>
        <List display="flex" cursor="pointer">
          <Show below="sm">
            <PopUpMenu toggle={toggle} onRemove={() => setToggle(!toggle)} />
          </Show>
          <Show above="sm">
            <MenuBar menu={menuItem} />
          </Show>
        </List>
      </HStack>
    </Center>
  );
};

export default NavBar;

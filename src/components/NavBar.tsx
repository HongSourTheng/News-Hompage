import { Center, HStack, Image, List, ListItem, Show } from "@chakra-ui/react";
import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import menuItem from "../data/menu";
const NavBar = () => {
  return (
    <Center>
      <HStack
        justifyContent="space-between"
        w={{
          base: "96%",
          sm: "80%",
        }}
      >
        <List>
          <ListItem>
            <Image cursor="pointer" src={logo} alt="logo" boxSize="40px" />
          </ListItem>
        </List>
        <List display="flex" cursor="pointer">
          <Show below="sm">
            <Image src={iconMenu} alt="icon_menu" boxSize="20px" />
          </Show>
          <Show above="sm">
            {menuItem.map((menu) => (
              <ListItem
                _hover={{
                  transition: " 0.3s ease",
                  color: "hsl(35, 77%, 62%)",
                }}
                fontFamily="inter-regular"
                fontSize="sm"
                p={3}
                key={menu.id}
              >
                {menu.name}
              </ListItem>
            ))}
          </Show>
        </List>
      </HStack>
    </Center>
  );
};

export default NavBar;

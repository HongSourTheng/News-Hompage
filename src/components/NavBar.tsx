import {
  Box,
  Center,
  HStack,
  Image,
  List,
  ListItem,
  Show,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-menu-close.svg";
import menuItem from "../data/menu";
import { useState } from "react";
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
            {toggle ? (
              <>
                <List
                  position="absolute"
                  top="0"
                  right="0"
                  bg="hsl(36, 100%, 99%)"
                  zIndex="3"
                  w="250px"
                  h="100vh"
                >
                  <Image
                    cursor="pointer"
                    p={5}
                    float="right"
                    src={iconClose}
                    alt="icon_menu"
                    boxSize="65px"
                    onClick={() => setToggle(!toggle)}
                  />
                  <Box mt="120px" ml={2}>
                    {menuItem.map((menu) => (
                      <ListItem
                        fontFamily="inter-bold"
                        fontSize="md"
                        p={2}
                        key={menu.id}
                      >
                        {menu.name}
                      </ListItem>
                    ))}
                  </Box>
                </List>
                <Box
                  w="100%"
                  h="100vh"
                  zIndex="2"
                  bg="rgba(0, 0, 0, 0.208)"
                  position="absolute"
                  top='0'
                  left='0'
                  onClick={() => setToggle(!toggle)}
                />
              </>
            ) : (
              <Image
                src={iconMenu}
                alt="icon_menu"
                boxSize="20px"
                onClick={() => setToggle(!toggle)}
              />
            )}
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

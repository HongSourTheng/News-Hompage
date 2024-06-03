import { Box, Image, List, ListItem } from "@chakra-ui/react";
import menuItem from "../data/menu";
import iconClose from "../assets/images/icon-menu-close.svg";
const Test = () => {
  return (
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
        />
        <Box mt="120px" ml={2}>
          {menuItem.map((menu) => (
            <ListItem fontFamily="inter-bold" fontSize="md" p={2} key={menu.id}>
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
      />
    </>
  );
};

export default Test;

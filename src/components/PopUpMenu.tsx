import { Box, Image, List, ListItem } from "@chakra-ui/react";
import menuItem from "../data/menu";
import iconClose from "../assets/images/icon-menu-close.svg";
import iconMenu from "../assets/images/icon-menu.svg";

interface Props {
  toggle: boolean;
  onRemove: (toggle: boolean) => void;
}

const PopUpMenu = ({ toggle, onRemove }: Props) => {
  return (
    <>
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
              _hover={{
                transition: " 0.3s linear",
                transform: "scale(0.95)",
              }}
              cursor="pointer"
              p={5}
              float="right"
              src={iconClose}
              alt="icon_close"
              boxSize="65px"
              onClick={() => onRemove(!toggle)}
            />
            <Box mt="120px" ml={2}>
              {menuItem.map((menu) => (
                <ListItem
                  _hover={{
                    transition: " 0.3s ease",
                    color: "hsl(5, 85%, 63%)",
                  }}
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
            bg="rgba(0, 0, 0, 0.24)"
            position="absolute"
            top="0"
            left="0"
            onClick={() => onRemove(!toggle)}
          />{" "}
        </>
      ) : (
        <Image
          _hover={{
            transition: " 0.2s linear",
            transform: "scale(0.85)",
          }}
          src={iconMenu}
          alt="icon_menu"
          boxSize="22px"
          onClick={() => onRemove(!toggle)}
        />
      )}
    </>
  );
};

export default PopUpMenu;

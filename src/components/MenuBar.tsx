import { ListItem } from "@chakra-ui/react";

interface Items {
  id: number;
  name: string;
}

interface Props {
  menu: Items[];
}

const MenuBar = ({ menu }: Props) => {
  return menu.map((item) => {
    return (
      <ListItem
        key={item.id}
        _hover={{
          transition: " 0.3s ease",
          color: "hsl(35, 77%, 62%)",
        }}
        fontFamily="inter-regular"
        fontSize="sm"
        p={3}
      >
        {item.name}
      </ListItem>
    );
  });
};

export default MenuBar;

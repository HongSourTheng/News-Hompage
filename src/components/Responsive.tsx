import { Center, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

// to define this block of code using interface below

// display={{
//     base: "block",
//     md: "flex",
//   }}

interface DisplayValue {
  [key: string]: string;
}

interface Props {
  children: ReactNode;
  mt: number;
  display?: DisplayValue;
  alignItems?: string;
  backGround?: string;
}

const Responsive = ({
  children,
  mt,
  display = { base: "flex" },
  alignItems,
  backGround,
}: Props) => {
  return (
    <Center>
      <HStack
        w={{
          base: "96%",
          sm: "80%",
        }}
        mt={mt}
        display={display}
        alignItems={alignItems}
        backgroundColor={backGround}
        justifyContent='space-between'
        flexWrap="wrap"
      >
        {children}
      </HStack>
    </Center>
  );
};

export default Responsive;

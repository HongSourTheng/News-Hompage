import {
  Box,
  Stack,
  HStack,
  Badge,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface Products {
  id: string;
  img: string;
  name: string;
  desc: string;
}
interface Props {
  product: Products[];
}
const Products = ({ product }: Props) => {
  return (
    <Box mt={1} w="100%" flexShrink={0} float="left" m="60px 0px">
      <Stack
        w="100%"
        direction={{
          base: "column",
          md: "row",
        }}
        spacing="30px"
      >
        {product.map((p) => {
          return (
            <HStack key={p.id} w={{ base: "100%", md: "31.88%" }} h="120px">
              <Box
                w={{
                  base: "35%",
                  xl: "30%",
                }}
                h="100%"
                overflow="hidden"
              >
                <Image
                  src={p.img}
                  boxSize="100%"
                  objectFit="cover"
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "0.3s ease-out",
                  }}
                />
              </Box>
              <Box
                w={{
                  base: "63%",
                  xl: "68%",
                }}
                ml="2%"
                h="100%"
                pr={{
                  sm: "0px",
                  xl: "10px",
                }}
              >
                <Badge
                  fontSize={{
                    base: "1.7rem",
                    md: "1.25rem",
                    xl: "1.7rem",
                  }}
                  colorScheme="transparent"
                  color="gray.300"
                  mt="-9px"
                >
                  {p.id}
                </Badge>
                <Heading
                  as="h3"
                  size={{
                    sm: "md",
                    md: "xs",
                    lg: "sm",
                    "2xl": "md",
                  }}
                  mt={1}
                  mb={2}
                  cursor='pointer'
                  _hover={{
                    color: "hsl(5, 85%, 63%)",
                    transition: "0.3s ease-out",
                  }}
                >
                  {p.name}
                </Heading>
                <Text
                  fontSize={{
                    base: "13.8px",
                    sm: "14px",
                    md: "10px",
                    xl: "13.5px",
                  }}
                  fontFamily="inter-regular"
                  color="hsl(236, 13%, 42%)"
                  lineHeight={{
                    sm: 5,
                    xl: 6,
                  }}
                >
                  {p.desc}
                </Text>
              </Box>
            </HStack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Products;

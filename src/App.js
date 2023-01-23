import {
  Container,
  Flex,
  HStack,
  VStack,
  Box,
  Button as ButtomChakra,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { DiApple } from "react-icons/di";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import "./App.css";

function App() {
  //#a9c45e
  //#050C15
  //textShadow="-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"
  return (
    <div className="App">
      <header className="App-header">
        <Flex h="300px" flexDir="column" align="center" justify="center">
          <Box>
            <Text fontSize={80} fontWeight="black" letterSpacing={0.5}>
              NutriFit
            </Text>
            <Text fontSize={40} fontWeight="bold">
              healthy food made easy.
            </Text>
          </Box>
        </Flex>
        <Container maxW="6xl" mt={10}>
          <Flex align="flex-end" justify="space-between">
            <HStack>
              <ButtomChakra
                h="70px"
                leftIcon={<DiApple fontSize={50} />}
                borderRadius="5px"
                bg="black"
                _hover={{
                  bg: "black",
                  cursor: "default",
                }}
              >
                <Text>
                  {" "}
                  <span style={{ fontStyle: "italic", fontSize: "0.8rem" }}>
                    Coming soon...
                  </span>
                  <br style={{ marginBottom: "0px" }} />
                  <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    App Store
                  </span>
                </Text>
              </ButtomChakra>
              <ButtomChakra
                h="70px"
                leftIcon={<IoLogoGooglePlaystore fontSize={50} />}
                borderRadius="5px"
                bg="black"
                _hover={{
                  bg: "black",
                  cursor: "default",
                }}
              >
                <Text>
                  {" "}
                  <span style={{ fontStyle: "italic", fontSize: "0.8rem" }}>
                    Coming soon...
                  </span>
                  <br style={{ marginBottom: "0px" }} />
                  <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Google Play
                  </span>
                </Text>
              </ButtomChakra>
            </HStack>
            <VStack align="flex-start">
              <Text fontSize="2.5rem">Get early access</Text>
              <HStack spacing={0.5}>
                <Input
                  h="55px"
                  placeholder="write your E-mail"
                  _placeholder={{
                    opacity: 0.8,
                    color: "gray.50",
                    fontStyle: "italic",
                  }}
                  _focus={{
                    borderColor: "white",
                    boxShadow: "0 0 0 2px white",
                    outline: "0 0 0 3px white",
                  }}
                ></Input>
                <ButtomChakra
                  h="55px"
                  w="100px"
                  bg="white"
                  color="black"
                  borderRadius="5px"
                  _hover={{
                    bg: "#f7f7f7",
                  }}
                  rightIcon={
                    <BsChevronRight
                      style={{
                        color: "black",
                        fontSize: "15px",
                        marginLeft: "-5px",
                      }}
                    />
                  }
                >
                  Send
                </ButtomChakra>
              </HStack>
            </VStack>
          </Flex>
        </Container>
      </header>
    </div>
  );
}

export default App;

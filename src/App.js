import { useState } from "react";
import {
  useBreakpointValue,
  useToast,
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
  const [inputValue, setInputValue] = useState("");
  const fontIcon = useBreakpointValue({
    base: 30,
    md: 50,
  });
  const toastMB = useBreakpointValue({
    base: "10px",
    md: "100px",
  });
  const toast = useToast();

  //#a9c45e
  //#050C15
  //textShadow="-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"
  return (
    <div className="App">
      <header className="App-header">
        <Flex
          h={["200px", "250px", "300px"]}
          flexDir="column"
          align="center"
          justify="center"
        >
          <Box>
            <Text
              fontSize={[45, 60, 80]}
              fontWeight="black"
              letterSpacing={0.5}
            >
              NutriFit
            </Text>
            <Text fontSize={[28, 35, 40]} fontWeight="bold">
              healthy food made easy.
            </Text>
          </Box>
        </Flex>
        <Container maxW="6xl" mt={[0, 10]}>
          <Flex align="flex-end" justify="space-between" flexWrap="wrap">
            <Flex flexWrap="wrap" gap={4}>
              <ButtomChakra
                h={["55px", "70px"]}
                leftIcon={<DiApple fontSize={fontIcon} />}
                borderRadius="5px"
                bg="black"
                _hover={{
                  bg: "black",
                  cursor: "default",
                }}
              >
                <Text>
                  {" "}
                  <Text as="span" fontStyle="italic" fontSize="0.8rem">
                    Coming soon...
                  </Text>
                  <br style={{ marginBottom: "0px" }} />
                  <Text
                    as="span"
                    fontWeight="bold"
                    fontSize={["1rem", "1.5rem"]}
                  >
                    App Store
                  </Text>
                </Text>
              </ButtomChakra>
              <ButtomChakra
                h={["55px", "70px"]}
                leftIcon={<IoLogoGooglePlaystore fontSize={fontIcon} />}
                borderRadius="5px"
                bg="black"
                _hover={{
                  bg: "black",
                  cursor: "default",
                }}
              >
                <Text>
                  {" "}
                  <Text as="span" fontStyle="italic" fontSize="0.8rem">
                    Coming soon...
                  </Text>
                  <br style={{ marginBottom: "0px" }} />
                  <Text
                    as="span"
                    fontWeight="bold"
                    fontSize={["1rem", "1.5rem"]}
                  >
                    Google Play
                  </Text>
                </Text>
              </ButtomChakra>
            </Flex>
            <VStack
              align="flex-start"
              mt={["35px", "30px", "0px"]}
              mb={["100px", "70px", "0px"]}
            >
              <Text fontSize={[30, 40, 40]}>Get early access</Text>
              <HStack spacing={0.5}>
                <Input
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
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
                  fontSize={[15, 15, 20]}
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
                  onClick={() => {
                    const isValidEmail = inputValue
                      .toLowerCase()
                      .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      );

                    if (!isValidEmail) {
                      toast({
                        title: "Email is not valid.",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                        containerStyle: {
                          marginBottom: toastMB,
                        },
                      });
                      return;
                    }

                    setInputValue("");
                    toast({
                      title: "Email submitted.",
                      description: "Thank you, we will reach out soon.",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                      containerStyle: {
                        marginBottom: toastMB,
                      },
                    });
                  }}
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

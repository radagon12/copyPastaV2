import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { FaEarthAmericas } from "react-icons/fa6";
import { BsIncognito } from "react-icons/bs";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  useTimeout,
} from "@chakra-ui/react";

import "./home.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { PrivateContext } from "../context/PrivateContext";
import { useEffect } from "react";

const Home = ({setProgress}) => {
  const navigate = useNavigate();
  const {token , setToken} = useContext(PrivateContext)

  const handleGlobal = () => {
    navigate("/global");
  };

  useEffect(() =>{
    setProgress(20)
    setTimeout(()=>{
        setProgress(60)
    },500)
    setTimeout(() => setProgress(100), 700)
  },[])

  const handlePrivate = () => {
    if(token)
    {
        navigate("/private")
    }

    setOverlay(<OverlayOne />);
    onOpen();
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const handleSubmit = () => {
    if(isWrong)return;

    localStorage.setItem('anogh','YES')
    setToken(true)

    navigate('/private');
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [input, setInput] = useState('')
  const isError = input === '';
  const expectedPassword = import.meta.env.VITE_PASSWORD;
  const isWrong = input !== expectedPassword;


  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <div className="Home">
        <Stack direction="column" spacing={4} boxSize={300}>
          <Button
            leftIcon={<FaEarthAmericas />}
            onClick={handleGlobal}
            colorScheme="green"
            variant="solid"
          >
            Global
          </Button>
          <Button
            leftIcon={<BsIncognito />}
            onClick={handlePrivate}
            colorScheme="red"
            variant="solid"
          >
            Private
          </Button>
        </Stack>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Exclusively for Anogh</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={8}>
              <FormControl isInvalid={isError || isWrong}>
                <FormLabel>Password</FormLabel>
                <Input
                  ref={initialRef}
                  type="password"
                  placeholder="Password"
                  onChange={(ev) => setInput(ev.target.value)}
                />
                {(isError) && (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
                {(isWrong) &&(
                    <FormErrorMessage>Please enter the correct password.</FormErrorMessage>
                )
                }
                <Button mt={4} onClick={handleSubmit}>
                  Submit
                </Button>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default Home;

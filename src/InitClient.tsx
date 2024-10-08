import { ChakraProvider } from "@chakra-ui/react";

type InitClientProps = {
  children: JSX.Element;
};

function InitClient({ children }: InitClientProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default InitClient;

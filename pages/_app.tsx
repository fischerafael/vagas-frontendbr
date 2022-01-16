import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { JobsProvider } from "../src/hooks/useJobs";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <JobsProvider>
        <Component {...pageProps} />
      </JobsProvider>
    </ChakraProvider>
  );
}

export default MyApp;

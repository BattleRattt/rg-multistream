import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import Fonts from "../components/Fonts";

const theme = extendTheme({
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
});

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Head>
      <title>
        Streams - Radiant Gaming - Watch multiple Twitch streams on your screen!
      </title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Watch multiple Twitch streams on your screen!"
      />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content="Streams - Radiant Gaming" />
      <meta
        itemProp="description"
        content="Watch multiple Twitch streams on your screen!"
      />
      <meta itemProp="image" content="http://multistream.gg/assets/og-01.jpg" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://streams.radiant-gaming.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Streams - Radiant Gaming" />
      <meta
        property="og:description"
        content="Watch multiple Twitch streams on your screen! 🙌"
      />
      <meta name="og:image" content="https://streams.radiant-gaming.com/assets/og-01.jpg" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="Streams - Radiant Gaming" />
      <meta property="twitter:url" content="https://streams.radiant-gaming.com/" />
      <meta name="twitter:title" content="Streams - Radiant Gaming" />
      <meta
        name="twitter:description"
        content="Watch multiple Twitch streams on your screen! 🙌"
      />
      <meta
        name="twitter:image"
        content="https://streams.radiant-gaming.com/assets/og-01.jpg"
      />
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;

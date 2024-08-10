import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main';
import theme from '../lib/theme'
import Fonts from '../components/font'
import { AnimatePresence } from "framer-motion";
const Web=({Component,pageProps,router})=>{
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence mode="wait" initial={true}>
                <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}
export default Web
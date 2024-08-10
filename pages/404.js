import NextLink from 'next/link';
import {Box,Text, Heading,Container,Button,Divider} from '@chakra-ui/react';
const NotFound=()=>{
    return (
        <Container>
            <Heading as="h1" size="2xl" color="red.500" mb={6}>
                404 - Page Not Found
            </Heading>
            <Text>Sorry, the page you're looking for doesn't exist.</Text>
            <Box mt={4}>
                <NextLink href="/">
                    <Button variant="outline" colorScheme="red">
                        Go Back Home
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}
export default NotFound
import { Container, Box, Heading, Image, Button } from "@chakra-ui/react";
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import NextLink from 'next/link';
import { BioSection, BioYear } from "../components/bio";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/articles";
const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" p={3} align="center" mb={6} bg="red">
                    Hi, I'm a Video Editor, Developer and Blogger
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow="1">
                        <Heading as="h2" variant="page-title">
                            Brian
                        </Heading>
                        <p>Video Editor / Developer / Blogger</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Box
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius="full"
                            overflow="hidden"
                        >
                            <Image
                                src="/images/pfp.png"
                                alt="Profile image"
                                width="100"
                                height="100"
                            />

                        </Box>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>

                    <Paragraph>
                        Brian is a blogger about social life and educating. Currently he is learning about Video Editing and Developing
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
                                My Portfolio
                            </Button>
                        </NextLink>

                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>
                            2008
                        </BioYear>
                        Born in Vinh, VietNam
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2024
                        </BioYear>
                        Learning at local High School, start to do Blogger and educating Video Editing and Developing
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Coding, Video Editing, Music, Gaming
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    );
};

export default Page;

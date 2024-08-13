import { Container, Box,Heading,SimpleGrid,Divider } from "@chakra-ui/react";
import Section from '../components/section';
import { WorkGridItem } from "../components/grid-item";
import portfolioThumbnail from '../public/images/works/portfolio.png'
import blogThumbnail from '../public/images/works/blog.png'
import cyborgThumbnail from '../public/images/works/cyborg.png'
import LR from '../works/linear-regression'
const Works=()=>{
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="portfolio" title="Portfolio" thumbnail={portfolioThumbnail}>
                        A portfolio about me
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="blog" title="My Blog" thumbnail={blogThumbnail}>
                        My blog
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="cyborg" title="Cyborg" thumbnail={cyborgThumbnail}>
                        A cyberpunk poster
                    </WorkGridItem>
                </Section>
                <LR/>
            </SimpleGrid>
        </Container>
    )
}

export default Works
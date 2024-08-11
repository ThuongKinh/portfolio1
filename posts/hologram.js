import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section';
import { WorkGridItem } from "../components/grid-item";
import hologramThumbnail from "../public/images/contents/basic3d.png";
const Hologram = () => {
    
       return( <Section>
            <WorkGridItem id="hologram" title="Hologram Effect" thumbnail={hologramThumbnail}>
                A hologram effect
            </WorkGridItem>
        </Section>)
    
}
export default Hologram;
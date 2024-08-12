import { Container, Box,Heading,SimpleGrid,Divider } from "@chakra-ui/react";
import Section from '../components/section';
import { WorkGridItem } from "../components/grid-item";
import timestopThumbnails from "../public/images/contents/timestop.png";
import camerastutter from '../public/images/contents/effect1.png';
import shakehighlight from '../public/images/contents/shake-highlight.png';
import Hologram  from "../posts/hologram";
import Text from "../posts/texteffect";
import Highlight from "../posts/highlight";
const Post=()=>{
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Post
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="timestop" title="TimeStop Effect" thumbnail={timestopThumbnails}>
                        A timestop effect
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="camerastutter" title="Camera Stutter Effect" thumbnail={camerastutter}>
                        A camera stutter effect
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="shakehighlights" title="Shake Highlight Effect" thumbnail={shakehighlight}>
                        A shake highlight effect
                    </WorkGridItem>
                </Section>
                <Hologram/>
                <Text/>
                <Highlight/>
            </SimpleGrid>
        </Container>
    )
}

export default Post;
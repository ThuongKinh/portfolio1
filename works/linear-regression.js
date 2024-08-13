import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section';
import { WorkGridItem } from "../components/grid-item";
import thumbnail from "../public/images/contents/gradient_descent_example.png";
const LR = () => {
    
       return( <Section>
            <WorkGridItem id="linear-regression" title="Linear Regression" thumbnail={thumbnail}>
                Linear Regression
            </WorkGridItem>
        </Section>)
    
}
export default LR;
import Section from '../../components/section';
import { WorkGridItem } from "../../components/grid-item";
import highlightThumbnail from "../../public/images/postcard/day1.png"
const Day1 = () => {
    
       return( <Section>
            <WorkGridItem id="Day1" title="Postcard Day 1" thumbnail={highlightThumbnail}>
                Day 1 of editing postcard
            </WorkGridItem>
        </Section>)
    
}
export default Day1;
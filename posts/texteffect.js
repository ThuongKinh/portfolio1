import Section from '../components/section';
import { WorkGridItem } from "../components/grid-item";
import textThumbnail from "../public/images/contents/text00.png";
const Text = () => {
    
       return( <Section>
            <WorkGridItem id="texteffect" title="Text Effect" thumbnail={textThumbnail}>
                All text effect
            </WorkGridItem>
        </Section>)
    
}
export default Text;
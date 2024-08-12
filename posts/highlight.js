import Section from '../components/section';
import { WorkGridItem } from "../components/grid-item";
import highlightThumbnail from "../public/images/contents/highlight.png"
const Highlight = () => {
    
       return( <Section>
            <WorkGridItem id="highlight" title="Highlight Effect" thumbnail={highlightThumbnail}>
                A highlight effect
            </WorkGridItem>
        </Section>)
    
}
export default Highlight;
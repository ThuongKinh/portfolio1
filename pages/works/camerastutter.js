import { Badge, Link, List, Container, ListItem } from '@chakra-ui/react';
import { Title, Meta, WorkImage } from '../../components/work';
import { TitlePost } from '../../components/post';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/articles';
import ReactPlayer from 'react-player';
import { useState } from 'react';

const Post = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <Layout title="Portfolio">
            <Container>
                <TitlePost>
                    Camera stutter <Badge>2024</Badge>
                </TitlePost>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="/"></Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/contents/effect1.png" />
                <ReactPlayer
                    url="/images/contents/camera stutter.mp4"
                    playing={isPlaying}
                    controls={true}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onClickPlay={handlePlayPause}
                />
            </Container>
        </Layout>
    );
};

export default Post;
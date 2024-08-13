import { Badge, Link, List, Container, ListItem } from '@chakra-ui/react'
import { Title, Meta,WorkImage } from '../../components/work'
import ReactPlayer from 'react-player'
import Paragraph from '../../components/paragraph'
import { useState } from 'react';

import Layout from '../../components/layouts/articles'

const Work = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <Layout title="Portfolio">
            <Container>
                <Title>
                    Linear Regression <Badge>2024</Badge>
                </Title>
                <Paragraph>
                    A code to run linear regression
                </Paragraph>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://github.com/ThuongKinh/linear-regression">https://github.com/ThuongKinh/linear-regression</Link>
                </ListItem>
                </List>
                <WorkImage src="/images/contents/gradient_descent_example.png" />
                <ReactPlayer
                    url="/images/contents/gradient_descent_example.mp4"
                    playing={isPlaying}
                    controls={true}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onClickPlay={handlePlayPause}
                />
            </Container>
        </Layout>
    )
}

export default Work
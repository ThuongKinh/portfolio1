import { Badge, Link, List, Container, ListItem } from '@chakra-ui/react'
import { Title, Meta,WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/articles'

const Work = () => {
    return (
        <Layout title="Portfolio">
            <Container>
                <Title>
                    Poster <Badge>2024</Badge>
                </Title>
                <Paragraph>
                    A cyberpunk poster
                </Paragraph>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="/"></Link>
                </ListItem>
                </List>
                <WorkImage src="/images/works/cyborg.png" />
            </Container>
        </Layout>
    )
}

export default Work
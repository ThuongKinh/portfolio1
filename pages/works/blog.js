import { Badge, Link, List, Container, ListItem } from '@chakra-ui/react'
import { Title, Meta,WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/articles'

const Work = () => {
    return (
        <Layout title="Portfolio">
            <Container>
                <Title>
                    Blog <Badge>2024</Badge>
                </Title>
                <Paragraph>
                    A blog about study with me and social life
                </Paragraph>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.facebook.com/profile.php?id=61563704424851">https://www.facebook.com/profile.php?id=61563704424851</Link>
                </ListItem>
                </List>
                <WorkImage src="/images/works/blog.png" />
            </Container>
        </Layout>
    )
}

export default Work
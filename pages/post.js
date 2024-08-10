import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/articles'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import firstBlog from '../public/images/contents/blog1.png'

const Post = () => (
  <Layout >
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem title="Vlog 1-Week 1" thumbnail={firstBlog} href="https://fb.watch/tSV7KhUa19/" />

        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Post

import { MongoClient } from "mongodb";
import Head from "next/head";
import Layout from "../../components/layouts/standard-page";
import RichText from "../../util/RichText";

export async function getStaticPaths() {
  const mongo = new MongoClient(process.env.MONGO_URI)
  let paths = []

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const blogPostModel = await client.collection('content_models').findOne({ 'name.value': 'Blog Post' })
    await client.collection('contents').find({ contentModel: blogPostModel._id, published: true }).forEach(blogPost => paths.push({ params: { slug: blogPost.fields.slug }}))

  } catch (error) {
    console.error('Error with Mongo', error)
  }

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const mongo = new MongoClient(process.env.MONGO_URI)
  let blogPost = {}

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const blogPostModel = await client.collection('content_models').findOne({ 'name.value': 'Blog Post' })
    blogPost = await client.collection('contents').findOne({ contentModel: blogPostModel._id, published: true, 'fields.slug': context.params.slug })

  } catch (error) {
    console.error('Error with Mongo', error)
  }

  return {
    props: {
      blogPost: JSON.parse(JSON.stringify(blogPost))
    },
    revalidate: 300,
  }
}

export default function BlogPost({ blogPost }) {
  const createdAt = new Date(blogPost.createdAt).toDateString()
  const updatedAt = new Date(blogPost.updatedAt).toDateString()
  const { title, description, coverImage, body } = blogPost.fields
  return (
    <Layout>
      <Head>
        <title>{title} - Blog - Nicholson & Associates Insurance</title>
        <meta name="description" content={description} />
      </Head>
      <main className="w-full max-w-[1200px] mx-auto">
        <section className="section-alt">
          <h1 className="text-3xl lg:text-5xl md:!leading-snug">{title}</h1>
          <p>{createdAt}</p>
          <br />
          <picture>
            <source srcSet={`${coverImage.url}?w=2400`} media="(min-width: 1024px)" />
            <source srcSet={`${coverImage.url}?w=1600`} media="(min-width: 768px)" />
            <img src={`${coverImage.url}?w=750`} alt={coverImage.description} width="400" height="300" className="w-full aspect-[4/3] object-cover rounded-md" />
          </picture>
          <br />
          <RichText src={body} className="py-2" maxWidth="1200px" />
        </section>
      </main>
    </Layout>
  )
}

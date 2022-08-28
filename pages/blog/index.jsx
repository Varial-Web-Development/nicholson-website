import { MongoClient } from "mongodb";
import Link from "next/link";
import Layout from "../../components/layouts/standard-page";

export async function getStaticProps() {
  const mongo = new MongoClient(process.env.MONGO_URI)
  let blogPosts = []

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const blogPostModel = await client.collection('content_models').findOne({ 'name.value': 'Blog Post' })
    await client.collection('contents').find({ contentModel: blogPostModel._id, published: true }).forEach(blogPost => blogPosts.push(blogPost))

  } catch (error) {
    console.error('Error with Mongo', error)
  }
  
  return {
    props: {
      blogPosts: JSON.parse(JSON.stringify(blogPosts))
    },
    revalidate: 300,
  }
}

export default function BlogIndex({ blogPosts }) {

  return (
    <Layout>
      <main className="section grid place-items-center bg-gradient-to-b from-nicholson-blue-500 via-[#2FA8E9] to-nicholson-green-500">
        <section className="section-alt">
          <h1 className="text-center text-3xl lg:text-5xl text-white w-[10ch] mx-auto lg:w-[20ch] leading-tight">Recent Articles</h1>
        </section>
        {/* <section className="section-alt grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <section className="flex flex-wrap gap-8 max-w-[1600px] mx-auto section-alt justify-center">
          {blogPosts.map(blogPost => {
            const createdAt = new Date(blogPost.createdAt).toDateString()
            const updatedAt = new Date(blogPost.updatedAt).toDateString()
            const { title, description, slug, coverImage } = blogPost.fields
            return (
              <div key={blogPost._id} className="w-full md:w-[calc(50%_-_32px)] lg:w-[calc(33%_-_32px)] border p-4 rounded-md grid gap-4 bg-white border-none shadow">
                <picture>
                  <img src={coverImage.url} alt={coverImage.description} width="400" height="300" className="w-full" />
                </picture>
                <div>
                  <h2>{title}</h2>
                  <p>{updatedAt !== createdAt ? updatedAt : createdAt}</p>
                </div>
                <p>{description}</p>
                <Link href={`/blog/${slug}`}>
                  <a className="bg-nicholson-blue-500 text-white w-full py-2 px-12 rounded-full shadow block text-center">
                    Read full article
                  </a>
                </Link>
              </div>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
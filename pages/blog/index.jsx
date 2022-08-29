import { MongoClient } from "mongodb";
import Head from "next/head";
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
      <Head>
        <title>Recent Articles - Blog - Nicholson & Associates Insurance</title>
        <meta name="description" content="Recent articles about insurance and other relevant topics." />
      </Head>
      <main className="section grid place-items-center bg-gradient-to-b from-nicholson-blue-500 via-[#2FA8E9] to-nicholson-green-500">
        <section className="section-alt">
          <h1 className="text-center text-3xl lg:text-5xl text-white w-[10ch] mx-auto lg:w-[20ch] leading-tight">Recent Articles</h1>
        </section>
        {/* <section className="section-alt grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <section className="grid gap-8 lg:gap-12 w-full max-w-[1600px] mx-auto section-alt justify-center items-start">
          {blogPosts.map(blogPost => {
            const createdAt = new Date(blogPost.createdAt).toDateString()
            const updatedAt = new Date(blogPost.updatedAt).toDateString()
            const { title, description, slug, coverImage } = blogPost.fields
            return (
              <div
                key={blogPost._id}
                className="bg-white max-w-[800px] grid lg:grid-cols-2 rounded-md shadow-md"
              >
                <picture>
                  <source srcSet={`${coverImage.url}?w=1600`} media="(min-width: 768px)" />
                  <img src={`${coverImage.url}?w=750`} alt={coverImage.description} width="400" height="400" className="w-full lg:h-full aspect-square object-cover rounded-t-md lg:rounded-t-none lg:rounded-l-md" />
                </picture>
                <div className="flex flex-col w-full h-full gap-4 justify-between p-4 lg:p-8">
                  <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm">{updatedAt !== createdAt ? updatedAt : createdAt}</p>
                  </div>
                  <p className="text-[16px] w-full">{description}</p>
                  <Link href={`/blog/${slug}`}>
                    <a className="bg-nicholson-blue-500 text-white w-full py-2 px-12 mt-4 rounded-full shadow block text-center">
                      Read full article
                    </a>
                  </Link>
                </div>
              </div>
            )
            // return (
            //   <div key={blogPost._id} className="w-full md:w-[calc(50%_-_32px)] lg:w-[calc(33%_-_32px)]  border p-4 rounded-md grid gap-4 bg-white border-none shadow overflow-hidden">
            //     <picture>
            //       <img src={coverImage.url} alt={coverImage.description} width="400" height="300" className="w-full max-w-full aspect-square object-cover rounded-md" />
            //     </picture>
            //     <div>
            //       <h2>{title}</h2>
            //       <p>{updatedAt !== createdAt ? updatedAt : createdAt}</p>
            //     </div>
            //     <p>{description}</p>
            //     <Link href={`/blog/${slug}`}>
            //       <a className="bg-nicholson-blue-500 text-white w-full py-2 px-12 rounded-full shadow block text-center">
            //         Read full article
            //       </a>
            //     </Link>
            //   </div>
            // )
          })}
        </section>
      </main>
    </Layout>
  )
}
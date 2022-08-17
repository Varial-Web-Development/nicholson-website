import Layout from "../../components/layouts/standard-page";

export async function getStaticProps() {
  let posts = []

  await fetch('http://localhost:3002/api/blog-posts')
  .then(response => response.json())
  .then(response => {
    console.log(response)
  })
  .catch(error => console.error(error))

  return {
    props: {

    }
  }
}

export default function BlogIndex() {
  return (
    <Layout>
      blog page
    </Layout>
  )
}
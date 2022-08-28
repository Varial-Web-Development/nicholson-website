import { MongoClient } from "mongodb";
import Link from "next/link";
import Layout from "../components/layouts/standard-page";

export async function getStaticProps() {
  let jobListings = []

  const mongo = new MongoClient(process.env.MONGO_URI)

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const contentModel = await client.collection('content_models').findOne({ 'name.value': 'Job Listing' })
    await client.collection('contents').find({ contentModel: contentModel._id, published: true }).forEach(job => jobListings.push(job))
  } catch (error) {
    console.error('Error in getStaticProps', error)
  }

  return {
    props: {
      jobListings: JSON.parse(JSON.stringify(jobListings))
    },
    revalidate: 300,
  }
}

export default function CareersPage({ jobListings = [] }) {

  console.log('job listings', jobListings)

  return (
    <Layout>
      <main>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h1 className="text-center text-5xl max-w-[20ch] mx-auto lg:w-fit leading-tight">
            Work with <span className="text-nicholson-blue-500">Heart</span> at Nicholson & Associates 
          </h1>
          <p>
            At Nicholson & Associates, we are more than just a company. We consider ourselves a family and are always looking for ways to better support our staff so they can grow professionally and personally. Our team is made up of the best and brightest, and we are eager to bring aboard talented, like-minded individuals to join us in making our local communities an even better place to be.
          </p>
          <p>
            We want work to feel like your home away from home. That's why we make every effort to create a welcoming and positive space that you will enjoy coming to each day. As a member of our team, you can enjoy many wonderful perks, including:
          </p>
          <ul>
            <li>Paid time off</li>
            <li>Paid holidays</li>
            <li>Group health insurance benefits</li>
            <li>401k</li>
            <li>Continuing education opportunities</li>
          </ul>
          <p>
            The Nicholson team is committed to a specific set of personal values and professional goals. We strive to serve, protect, and connect with our local communities to help them thrive. We aim to provide a seamless customer service experience based on a combination of industry knowledge and a commitment to excellence. We wish to educate every client on the best available solutions for their every need, and with that we are avid, lifelong learners striving to grow our knowledge and better help our clients. If you resonate with these missions, then we are certain you will find fulfillment and development opportunities with our team.
          </p>
          <p>
            Ready to start your next career? 
            Apply today by emailing <Link href="mailto:billie@nichinsure.com"><a className="underline text-nicholson-blue-500">billie@nichinsure.com</a></Link> or 
            complete our application and be a part of something great. We can't wait to meet you! 
          </p>
          <Link href="/careers/apply"><a className="bg-nicholson-blue-500 text-white p-4 px-24 rounded-full w-full lg:w-fit text-center shadow-sm">Apply now</a></Link>
        </section>
        <section className="section-alt flex flex-col gap-8 items-center">
          <h2 className="max-w-[20ch] leading-tight text-center">Open Positions</h2>
          {jobListings.length === 0 && (
            <p className="italic">
              * While we may not be actively hiring for some of our roles, we gladly accept applications year-round 
              and encourage qualified and interested applicants to submit their information for future consideration. 
              Please <Link href="/contact-us"><a className="underline text-nicholson-blue-500">contact us</a></Link> any time if you are interested in becoming a part of our team!
            </p>
          )}
          {jobListings.length > 0 && (
            <div className="w-full max-w-[65ch] grid gap-8">
              {jobListings.map(job => (
                <details key={job._id} className="bg-slate-100 p-4">
                  <summary className="cursor-pointer select-none text-lg"><h3 className="inline">{job.fields.position}</h3></summary>
                  <div className="grid gap-4 p-4">
                    {job.fields.description && <p className="text-base max-w-full">{job.fields.description}</p>}
                    {job.fields.duties.length > 0 && !(job.fields.duties.length === 1 && job.fields.duties[0] === '') && (
                      <div>
                        <h4>Job Requirements:</h4>
                        <ul className="grid gap-1">
                          {job.fields.duties.map(duty => <li key={duty} className="text-base">{duty}</li>)}
                        </ul>
                      </div>
                    )}
                    {job.fields.qualifications.length > 0 && !(job.fields.qualifications.length === 1 && job.fields.qualifications[0] === '') && (
                      <div>
                        <h4>Education & Experience:</h4>
                        <ul className="grid gap-1">
                          {job.fields.qualifications.map(qualification => <li key={qualification} className="text-base">{qualification}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          )}
        </section>
      </main>
    </Layout>
  )
}
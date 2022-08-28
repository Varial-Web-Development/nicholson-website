import Link from "next/link";

export default function TeamSection() {
  return (
    <section className="p-4 pt-8 pb-12 md:px-[54px] md:pt-16 md:pb-24 lg:px-32 lg:pt-24 lg:pb-32 grid gap-8 md:gap-16 bg-gradient-to-b from-nicholson-blue-500 via-[#2FA8E9] to-nicholson-green-500">
      <h2 className="text-center text-white text-[28px] md:text-[40px] lg:text-5xl">Your <span className="text-nicholson-green-500">Local</span> Team</h2>
      <div className="bg-white p-4 md:p-8 lg:p-16 grid gap-4 md:gap-8 lg:gap-12 rounded-md shadow-md max-w-4xl mx-auto">
        <picture>
          <source srcSet="https://media.nicholson-insurance.com/images/team/nicholson-group-photo?w=1500" media="(min-width: 768px)" />
          <img src="https://media.nicholson-insurance.com/images/team/nicholson-group-photo?w=750" alt="Nicholson team photo" width="312" height="148" className="rounded-md w-full" />
        </picture>
        <p className="max-w-full">
          Our local independent agencies make insurance convenient, simple, and personal. 
          Every Nicholson team member is deeply committed to creating a positive experience for each customer and strives to provide the best insurance solutions to meet any need. 
          We believe in putting people first and helping others, and our team truly makes this vision a reality. 
          Licensed and experienced in a variety of insurance products, the Nicholson team is ready to take your call and help you get the protection you need to live confidently.
        </p>
        <Link href="/company-directory">
          <a className="bg-nicholson-blue-500 text-white text-center md:text-xl rounded-full p-2.5 md:p-4 md:px-28 shadow-sm max-w-2xl w-full mx-auto">
            Meet the team
          </a>
        </Link>
      </div>
    </section>
  )
}

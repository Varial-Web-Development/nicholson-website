import Link from "next/link";
import Layout from "../components/layouts/standard-page";

export default function InsuranceClaims() {
  return (
    <Layout>
      <main>
        <section className="section grid gap-8 md:gap-12 lg:gap-12 justify-center">
          <h1 className="text-center text-5xl w-[10ch] mx-auto lg:w-[20ch] leading-tight">Claims <span className="text-nicholson-blue-500">Support</span> in Your Time of Need</h1>
          <p className="mx-auto">
            Things happen unexpectedly, which is why you have insurance! 
            Let&apos;s work together to get your claim started and taken care of right away. 
            Call our office to get your claim started with your local agent, 
            or reach out to your insurance carrier directly to file. 
          </p>
        </section>
        <section className="section max-w-[1400px] mx-auto grid gap-8 md:gap-12 justify-center justify-content-center justify-items-center">
          <h2>Steps in an Emergency</h2>
          <div className="grid gap-6">
            <p>
              In the event of an emergency, always start by getting everyone to safety and contacting local authorities. 
              This includes the police and fire departments so that essential staff can be dispatched, 
              including paramedics to provide any necessary medical care or emergency transportation. 
              If you need immediate medical attention, always take the proper steps to get medical care. 
              If you are able to stay on the scene, this can help local authorities gather essential information about the incident. 
              It also gives you the opportunity to collect information that may be relevant to your claim. 
              Once the scene is under control and you have provided the necessary information to the authorities,
              <Link href="/contact-us"><a className="text-nicholson-blue-500"> contact us</a></Link> or your <Link href="/insurance-companies"><a className="text-nicholson-blue-500"> insurance company</a></Link> as soon as possible with as much information as you can. 
            </p>
            <p>
              Make sure with car accidents to take the time to collect essential information about the other party and details from any witnesses. 
              It is important to always get the other driver&apos;s personal information and details about the vehicle. 
              Pictures are a great way to show the scene and easily gather this information without having to write it down. 
              See our list of essential information below to be prepared in the event of a car accident. 
            </p>
            <p>
              With any emergency, make sure to see your primary care physician as soon as you are able even if you don&apos;t notice immediate injury or harm. 
              Car accidents can often leave drivers with underlying injuries that may initially go unnoticed. 
              Getting a medical evaluation after an accident can help in making sure you get the care you need and are compensated appropriately in your claim. 
            </p>
          </div>
        </section>
        <section className="section max-w-[1400px] mx-auto grid gap-8 md:gap-12 justify-center justify-content-center justify-items-center">
          <h2>Emergency Preparation</h2>
          <div className="grid gap-6">
            <p>
              Emergency situations like house fires or flooding can be distressing and overwhelming. 
              It is important to develop an emergency action plan for your family to keep everyone safe. 
              Take the time to practice your emergency action plan so you can be prepared during an emergency. 
              You may also wish to make a list of essential or valuable items in your home along with their value so you can easily determine what was lost,
              damaged, or destroyed in a disaster. We are happy to provide a home inventory list so you can easily track your current personal property and have it handy in the event of a loss.  
            </p>
            <p>
              With car accidents, always make sure you keep a list of essential information to collect. 
              You can often store this in the glovebox or even digitally on your phone. This includes: 
            </p>
            <ul className="list-disc list-inside">
              <li>Driver&apos;s name, address, and phone number</li>
              <li>Driver&apos;s license number</li>
              <li>License plate number and state</li>
              <li>VIN of the other vehicle</li>
              <li>Witness names and phone numbers</li>
            </ul>
            <p>
              It is critical to take photos if possible at the scene of the accident. 
              Cameras on cell phones are an excellent way to quickly snap a few pictures of damages to both vehicles, positions of the cars in the road,
               and other important details of the scene. You can also take photos of the key information above, such as driver&apos;s licenses, 
               license plates, and VINs to make it easy to have all in one place.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}
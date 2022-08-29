import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111720] p-4 pt-8 pb-12 md:p-16 lg:px-32 lg:py-24 grid gap-8 md:gap-16 lg:gap-24 relative">
      {/* locations */}
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 list-none max-w-full">
      <li>
          <address className="not-italic text-center text-white leading-7 md:text-[19px]">
            <p className="text-[22px] md:text-2xl text-nicholson-green-500 font-semibold text-center">Centralia</p>
            <p className="text-center font-normal">118 W Pine St</p>
            <p className="text-center font-normal">Centralia, Washington 98531</p>
            <p className="text-center font-normal">Phone: (360) 736-7601</p>
            <p className="text-center font-normal">Fax: (360) 330-0970</p>
            <Link href="https://www.google.com/maps/place/118+W+Pine+St,+Centralia,+WA+98531/@46.7172307,-122.9570717,17z/data=!3m1!4b1!4m5!3m4!1s0x54915fd54b5d0075:0xc146aeff56f66d82!8m2!3d46.7172307!4d-122.954883">
              <a className="text-nicholson-blue-400 font-medium block">View on Map</a>
            </Link>
            {/* <Link href="https://www.google.com/maps/dir/Washington+State+Capitol+Building+and+Campus,+Sid+Snyder+Avenue+Southwest,+Olympia,+WA/118+W+Pine+St,+Centralia,+WA+98531/@46.8773571,-123.0674907,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x549174fcfebd0985:0x4432a80ad77ff31a!2m2!1d-122.9046248!2d47.0360451!1m5!1m1!1s0x54915fd54b5d0075:0xc146aeff56f66d82!2m2!1d-122.954883!2d46.7172307">
              <a className="text-nicholson-blue-400 font-medium block">Driving Directions</a>
            </Link> */}
          </address>
        </li>
        <li>
          <address className="not-italic text-center text-white md:text-[19px] leading-7">
            <p className="text-[22px] md:text-2xl text-nicholson-green-500 font-semibold text-center">Olympia</p>
            <p className="text-center font-normal">1802 Black Lake Blvd SW #301</p>
            <p className="text-center font-normal">Olympia, Washington 98512</p>
            <p className="text-center font-normal">Phone: (360) 352-8444</p>
            <p className="text-center font-normal">Fax: (360) 943-9712</p>
            <Link href="https://www.google.com/maps/place/1802+Black+Lake+Blvd+SW,+Olympia,+WA+98512/@47.0317424,-122.9433301,17z/data=!4m5!3m4!1s0x549175b41f139057:0xe112ec63036a1d7d!8m2!3d47.0317424!4d-122.9411414">
              <a className="text-nicholson-blue-400 font-medium block">View on Map</a>
            </Link>
            {/* <Link href="https://www.google.com/maps/dir/Washington+State+Capitol+Building+and+Campus,+Sid+Snyder+Avenue+Southwest,+Olympia,+WA/1802+Black+Lake+Blvd+SW,+Olympia,+WA+98512/@47.0317424,-122.9433301,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x549175b41f139057:0xe112ec63036a1d7d!2m2!1d-122.9411414!2d47.0317424">
              <a className="text-nicholson-blue-400 font-medium block">Driving Directions</a>
            </Link> */}
          </address>
        </li>
        <li>
          <address className="not-italic text-center text-white leading-7 md:text-[19px]">
            <p className="text-[22px] md:text-2xl text-nicholson-green-500 font-semibold text-center">Packwood</p>
            <p className="text-center font-normal">12967 Hwy 12</p>
            <p className="text-center font-normal">Packwood, Washington 98361</p>
            <p className="text-center font-normal">Phone: (360) 494-7126</p>
            <p className="text-center font-normal">Fax: (360) 494-7124</p>
            <Link href="https://www.google.com/maps/place/12967+US-12,+Randle,+WA+98377/@46.6038334,-121.6759865,17z/data=!3m1!4b1!4m5!3m4!1s0x549727e3b461b811:0x67348e389309ecba!8m2!3d46.6038334!4d-121.6737978">
              <a className="text-nicholson-blue-400 font-medium block">View on Map</a>
            </Link>
            {/* <Link href="https://www.google.com/maps/dir/Washington+State+Capitol+Building+and+Campus,+Sid+Snyder+Avenue+Southwest,+Olympia,+WA/12967+Highway+12,+Randle,+WA/@46.7794605,-122.6199546,10z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x549174fcfebd0985:0x4432a80ad77ff31a!2m2!1d-122.9046248!2d47.0360451!1m5!1m1!1s0x549727e3b461b811:0x67348e389309ecba!2m2!1d-121.6737978!2d46.6038334">
              <a className="text-nicholson-blue-400 font-medium block">Driving Directions</a>
            </Link> */}
          </address>
        </li>
        <li>
          <address className="not-italic text-center text-white leading-7 md:text-[19px]">
            <p className="text-[22px] md:text-2xl text-nicholson-green-500 font-semibold text-center">Vancouver / Portland</p>
            <p className="text-center font-normal">9413 NE Hwy 99, Ste 2</p>
            <p className="text-center font-normal">Vancouver, Washington 98665</p>
            <p className="text-center font-normal">Phone: (360) 254-2842</p>
            <p className="text-center font-normal">Fax: (360) 256-8971</p>
            <Link href="https://www.google.com/maps/place/Parking+lot,+9413+NE+Hwy+99,+Vancouver,+WA+98665/@45.6910761,-122.6618242,17z/data=!3m1!4b1!4m5!3m4!1s0x5495ae64a40046a1:0xfc192fd05435e06!8m2!3d45.6910762!4d-122.6573395">
              <a className="text-nicholson-blue-400 font-medium block">View on Map</a>
            </Link>
            {/* <Link href="https://www.google.com/maps/dir/Washington+State+Capitol+Building+and+Campus,+Sid+Snyder+Avenue+Southwest,+Olympia,+WA/9413+NE+Hwy+99,+Vancouver,+WA/@46.2781441,-123.9527163,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x549174fcfebd0985:0x4432a80ad77ff31a!2m2!1d-122.9046248!2d47.0360451!1m5!1m1!1s0x5495ae64a40046a1:0xfc192fd05435e06!2m2!1d-122.6573395!2d45.6910762">
              <a className="text-nicholson-blue-400 font-medium block">Driving Directions</a>
            </Link> */}
          </address>
        </li>
      </ul>
      <div className="flex justify-between max-w-[260px] mx-auto gap-[58px]">
        <Link href="https://www.facebook.com/NicholsonIns">
          <a>
            <img src="/img/facebook.svg" width="40" height="40" alt="Nicholson Facebook page" className="md:w-12" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/nicholson_and_associates_ins">
          <a>
            <img src="/img/instagram.svg" width="40" height="40" alt="Nicholson Instagram page" className="md:w-12" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/company/nicholson-&-associates-insurance-in-olympia-wa">
          <a>
            <img src="/img/linkedin.svg" width="40" height="40" alt="Nicholson Instagram page" className="md:w-12" />
          </a>
        </Link>
      </div>
      <div className="grid gap-1 justify-center">
        <p className="text-white text-center md:text-[19px] font-normal">©2022 Nicholson & Associates LLC</p>
        <p className="text-white md:text-[19px] text-center font-normal">Created by <Link href="https://www.varial.dev"><a className="text-nicholson-blue-400 font-medium">Varial Web Services</a></Link></p>
      </div>
    </footer>
  )
}
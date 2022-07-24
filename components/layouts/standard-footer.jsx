import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111720] p-4 pt-8 pb-12 md:p-16 lg:px-32 lg:py-24 grid gap-8 md:gap-16 lg:gap-24 relative">
      {/* locations */}
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <li>
          <address className="not-italic text-center text-white leading-normal md:text-[19px]">
            <p className="text-xl md:text-2xl text-nicholson-green-500 font-semibold">Olympia</p>
            <p>1802 Black Lake Blvd SW #301</p>
            <p>Olympia, Washington 98512</p>
            <p>Phone: (360) 352-8444</p>
            <p>Fax: (360) 943-9712</p>
          </address>
        </li>
        <li>
          <address className="not-italic text-center text-white leading-normal md:text-[19px]">
            <p className="text-xl md:text-2xl text-nicholson-green-500 font-semibold">Centralia</p>
            <p>118 W Pine St</p>
            <p>Centralia, Washington 98531</p>
            <p>Phone: (360) 736-7601</p>
            <p>Fax: (360) 330-0970</p>
          </address>
        </li>
        <li>
          <address className="not-italic text-center text-white leading-normal md:text-[19px]">
            <p className="text-xl md:text-2xl text-nicholson-green-500 font-semibold">Packwood</p>
            <p>12967 Hwy 12</p>
            <p>Packwood, Washington 98361</p>
            <p>Phone: (360) 494-7126</p>
            <p>Fax: (360) 494-7124</p>
          </address>
        </li>
        <li>
          <address className="not-italic text-center text-white leading-normal md:text-[19px]">
            <p className="text-xl md:text-2xl text-nicholson-green-500 font-semibold">Vancouver / Portland</p>
            <p>9413 NE Hwy 99, Ste 2</p>
            <p>Vancouver, Washington 98665</p>
            <p>Phone: (360) 254-2842</p>
            <p>Fax: (360) 256-8971</p>
          </address>
        </li>
      </ul>
      <div className="grid gap-1 justify-center">
        <p className="text-white text-center md:text-[19px]">©2022 Nicholson & Associates LLC</p>
        <p className="text-white md:text-[19px] text-center">Created by <Link href="https://www.varial.dev"><a className="text-nicholson-blue-400">Varial Web Services</a></Link></p>
      </div>
    </footer>
  )
}
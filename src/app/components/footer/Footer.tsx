import Link from "next/link";
export default function Footer() {
  return (
    <footer className="text-[#333333] gap-4 flex flex-col md:flex-row justify-center items-center md:items-start w-full border-t border-gray-250 mt-auto pb-[5%] md:pb-[2%]">
            <div className="mt-[2.5%] md:mt-[1%] w-full flex flex-col gap-1 justify-center items-start">
            <p className="font-bold text-[#0A0A23]">Imperial Web Experts - </p>
            <p className="font-bold text-[#0A0A23] text-sm">Make Your Online Presence Imperial</p>
            <Link href="/">
                <p className="hover:cursor-pointer hover:underline hover:text-[#006400] transition-colors">Home</p>
            </Link>
            <Link href="/services">
                <p className="hover:cursor-pointer hover:underline hover:text-[#006400] transition-colors">Services</p>
            </Link>
            <Link href="/about">
                <p className="hover:cursor-pointer hover:underline hover:text-[#006400] transition-colors">About</p>
            </Link>            
            <Link href="/contact">
                <p className="hover:cursor-pointer hover:underline hover:text-[#006400] transition-colors">Contact</p>
            </Link>
            </div>
            <div className="md:mt-[1%] w-full flex flex-col gap-1 justify-center items-start">
                <p className="font-bold text-[#0A0A23]">Contact Info</p>
                <p className="">Imperial County, CA</p>
                    <p className="">Mexicali, B.C.</p>
                    <p className="">(760) 234-2481</p>
                    <p className="">imperialwebexperts@gmail.com</p>
            </div>
            <div className="md:mt-[1%] w-full flex flex-col gap-1 justify-center items-start">
                <p className="font-bold text-[#0A0A23]">Hours</p>
                <p className="">Mon - Fri: 8:00am-5:00pm</p>
                <p className="">Sat: 10:00am-2:00pm</p>
                <p className="">Sun: Closed</p>
            </div>
            <div className="md:mt-[1%] w-full flex flex-col gap-1 justify-center items-start">
                <p className="font-bold text-[#0A0A23]">Follow Us</p>
                <Link href="https://www.linkedin.com/company/imperial-web-experts">
                    <p className="hover:cursor-pointer hover:underline hover:text-[#006400] transition-colors">LinkedIn</p>
                </Link>
                <Link href="https://www.instagram.com/imperialwebexperts/">
                    <p className="hover:cursor-pointer hover:underline hover:text-[#006400] transition-colors">Instagram</p>
                </Link>
            </div>
    </footer>
  );
}

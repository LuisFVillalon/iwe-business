import Link from "next/link";
export default function Footer() {
  return (
    <footer className="text-[#333333] gap-4 flex flex-col md:flex-row justify-center items-center md:items-start w-full border-t border-gray-250 mt-auto pb-[5%] md:pb-[2%]">
            <div className="mt-[2.5%] md:mt-[1%] w-full flex flex-col gap-1 justify-center items-start">
            <p className="font-bold text-[#0A0A23]">Imperial Web Experts - </p>
            <p className="font-bold text-[#0A0A23] text-sm">Haz que tu presencia en línea sea imperial.</p>
            <Link href="/es">
                <p className="hover:cursor-pointer hover:underline hover:text-[#006400] transition-colors">Inicio</p>
            </Link>
            <Link href="/servicios">
                <p className="hover:cursor-pointer hover:underline hover:text-[#006400] transition-colors">Servicios</p>
            </Link>
            <Link href="/sobre">
                <p className="hover:cursor-pointer hover:underline hover:text-[#006400] transition-colors">Sobre Nosostros</p>
            </Link>            
            <Link href="/contacto">
                <p className="hover:cursor-pointer hover:underline hover:text-[#006400] transition-colors">Contacto</p>
            </Link>
            </div>
            <div className="md:mt-[1%] w-full flex flex-col gap-1 justify-center items-start">
                <p className="font-bold text-[#0A0A23]">Info de contacto</p>
                <p className="">Condado de Imperial, CA</p>
                    <p className="">Mexicali, B.C.</p>
                    <p className="">(760) 234-2481</p>
                    <p className="">imperialwebexperts@gmail.com</p>
            </div>
            <div className="md:mt-[1%] w-full flex flex-col gap-1 justify-center items-start">
                <p className="font-bold text-[#0A0A23]">Horario</p>
                <p className="">Lun - Vie: 8:00am-5:00pm</p>
                <p className="">Sáb: 10:00am-2:00pm</p>
                <p className="">Dom: Cerrado</p>
            </div>
            <div className="md:mt-[1%] w-full flex flex-col gap-1 justify-center items-start">
                <p className="font-bold text-[#0A0A23]">Síganos</p>
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

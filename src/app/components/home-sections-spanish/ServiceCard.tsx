import Image from "next/image";
import ClientScrollEffect from "../client-side/ClientScrollEffect";
import Link from "next/link";
import { LinkIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    price: string;
    icon: string;
    purpose: string;
    category: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
    title, 
    price, 
    icon, 
    purpose, 
    category
}) => {

    return (
        <div className="inter-text text-center bg-white rounded-2xl shadow-2xl border border-2 border-[#0A0A23] 
         overflow-hidden text-[#333333] my-[5%] md:my-[2%] border flex flex-col justify-center items-center 
         md:max-w-[33%] fade-in-scroll
         ">
            <ClientScrollEffect/>
            <Link href={`/servicios#${category}`} className="w-full flex justify-center items-center bg-[#ffffff] p-2 relative ">
                    <div className=" scale-hover relative w-30 h-30 md:w-50 md:h-50">
                        <Image 
                            src={icon}
                            alt="Service Icon"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <LinkIcon className="absolute bottom-2 right-2 w-4 h-4 text-[#006400]" />
            </Link>    
            <div className="p-2 w-full text-white" style={{ background: 'linear-gradient(180deg, #0A0A23  0%, #23508e 100%)' }}>
                        <p className="text-[#dab63e] text-xl md:text-2xl font-bold inter-text">{title}</p>
                        <p>{price}</p>
                        <p className="merriweather-text text-lg md:text-xl">{purpose}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
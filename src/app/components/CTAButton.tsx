import Link from "next/link";

interface ctaButtonProps {
  ctaText?: string;
}

export default function CTAButton({ ctaText }: ctaButtonProps): React.ReactElement {
  return (
                    <Link href="/contact" className="text-2xl px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-blue-500 text-[#ffffff] shadow-lg transform active:scale-95
                        active:shadow-md transition-all duration-150 hover:shadow-xl hover:-translate-y-1 border-b-4 border-r-2 border-[#004d00]
                        active:border-b-2 active:translate-y-1 font-bold cursor-pointer fade-in-ctabutton-bottom"
                    >
                        {ctaText}
                    </Link>
  );
}

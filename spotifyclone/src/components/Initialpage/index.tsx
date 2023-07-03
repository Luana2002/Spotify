import { ReactNode } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface imageInital {
    image: string,
    alt: string,
    desc: string
}

export function ImageInit({ image, alt, desc }: imageInital) {
    return (
        <div className="bg-white/5 group m-1 rounded flex items-center gap-2 overflow-hidden hover:bg-white/10 transiotion-colors">
            <Image src={image} width={100} height={100} alt={alt} />
            <strong>{desc}</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
            </button>
        </div>
    )
}
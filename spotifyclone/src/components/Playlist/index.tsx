import Image from "next/image";

interface Play {
    title: string
    desc: string
    image: string
}

export function PlayList({ title, desc, image }: Play) {
    return (
        <>
            <a href="" className="text-sm flex gap-4 text-zinc-300 hover:text-zinc-100">
                <Image src={image} width={50} height={50} alt="Album mais curtidas" />
                <div className="flex flex-col gap-2">
                    <strong className="font-semibold">{title}</strong>
                    <span className="text-sm text-zinc-500">{desc}</span>
                </div>
            </a>
        </>
    )
}
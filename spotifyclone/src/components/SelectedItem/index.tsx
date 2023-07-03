import Image from "next/image"

interface ItemSelect {
    image: string,
    alt: string,
    title: string,
    artist: string
}
export function SelectedItem({ image, alt, title, artist }: ItemSelect) {
    return (
        <a href="" className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10">
            <Image src={image} className="w-full" width={150} height={150} alt={alt} />
            <strong className="font-semibold">{title}</strong>
            <span className="text-xs text-zinc-500">{artist}</span>
        </a>
    )
}
import { ChevronLeft, ChevronRight, Users2 } from "lucide-react";
import Image from "next/image";
import { ImageInit } from "../Initialpage";
import { SelectedItem } from "../SelectedItem";

export function Main() {
    return (
        <main className="flex-1 p-6 bg-gradient-to-t from-black via-black  to-blue-950">
            <div className="grid grid-cols-2 items-center gap-4">
                <div className="flex items-center gap-3 justify-start">
                    <button className="rounded-full bg-black/40 p-1">
                        <ChevronLeft />
                    </button>
                    <button className="rounded-full bg-black/40 p-1">
                        <ChevronRight />
                    </button>
                </div>
                <div className="flex items-center gap-3 justify-end">
                    <Users2 className="w-8 h-8 rounded-full bg-black/40 p-1" size={20} />
                    <Image width={50} height={50} className="w-8 h-8 rounded-full" src="/img/user.jpg" alt="user image" />
                </div>
            </div>
            <h1 className="font-semibold text-3xl mt-6">Good Afternoon</h1>
            <div className="grid grid-cols-3 gap-4 mt-6">
                <ImageInit image="/img/adele.jpg" alt="Album Adele" desc="Mais Curtidas" />
                <ImageInit image="/img/bts.jpg" alt="Album bts" desc="BTS" />
                <ImageInit image="/img/katyperry.jpg" alt="Album katy perry" desc="Good Vibes" />
                <ImageInit image="/img/PLB.jpg" alt="Album plb" desc="Evangélicas" />
                <ImageInit image="/img/seujorge.jpg" alt="Album Seu Jorge" desc="Brasileiras" />
                <ImageInit image="/img/sunset lover.jpg" alt="Album Pepit Biscuit" desc="Eletrônicas" />
            </div>
            <h2 className="font-semibold text-2xl my-6">Made For Luana Rodrigues de Paula</h2>
            <div className="grid grid-cols-5 gap-4 mt-4">
                <SelectedItem image="/img/adele.jpg" alt="album Adele" title="Daily Mix 1" artist="artist1, artist2, art..." />
                <SelectedItem image="/img/bts.jpg" alt="album BTS" title="Daily Mix 2" artist="artist1, artist2, art..." />
                <SelectedItem image="/img/katyperry.jpg" alt="album Katy Perry" title="Daily Mix 3" artist="artist1, artist2, art..." />
                <SelectedItem image="/img/PLB.jpg" alt="album PLB" title="Daily Mix 4" artist="artist1, artist2, art..." />
                <SelectedItem image="/img/sunset lover.jpg" alt="album Suntet lover" title="Daily Mix 5" artist="artist1, artist2, art..." />
            </div>
        </main>
    )
}
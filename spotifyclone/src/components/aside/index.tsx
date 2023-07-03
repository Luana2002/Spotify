import { ArrowRight, HomeIcon, Library, Plus, Search } from "lucide-react";
import { ItemMenu } from "../Sidebar";
import { PlayList } from "../Playlist";

export function Aside() {
    return (
        <aside className="space-y-5 w-72 bg-zinc-950 p-6">
            <ItemMenu icon={<HomeIcon />} item="Home" url="#" />
            <ItemMenu icon={<Search />} item="Search" url="Search" />
            <nav className="nt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <ItemMenu icon={<Library />} item="Your Library" url="YourLibrary" />
                    <div className="flex items-center gap-2">
                        <Plus size={20} className="text-zinc-400 hover:text-zinc-200 cursor-pointer" />
                        <ArrowRight size={20} className="text-zinc-400  hover:text-zinc-200 cursor-pointer" />
                    </div>
                </div>
                <div className="mt-5 flex items-center gap-2">
                    <div className="w-16 h-5 rounded-full bg-zinc-900 text-center text-xs text-zinc-200">Playlist</div>
                    <div className="w-16 h-5 rounded-full bg-zinc-900 text-center text-xs text-zinc-200">Álbuns</div>
                    <div className="w-20 h-5 rounded-full bg-zinc-900 text-center text-xs text-zinc-200">Artistas</div>
                </div>
                <div className="mt-5 py-2">
                    <PlayList title="Mais Curtidas" desc="Mais Curtidas" image="/img/adele.jpg" />
                    <PlayList title="Evangélicas" desc="Evangélicas" image="/img/PLB.jpg" />
                    <PlayList title="Brasileiras" desc="Brasileiras" image="/img/seujorge.jpg" />
                    <PlayList title="BTS" desc="BTS" image="/img/bts.jpg" />
                    <PlayList title="BRUNO E MARRONE" desc="Bruno e Marrone" image="/img/brunoemarrone.jpg" />
                    <PlayList title="Good vibes" desc="Good Vibes" image="/img/katyperry.jpg" />
                    <PlayList title="Pagodim" desc="Luana" image="/img/seujorge.jpg" />
                    <PlayList title="Eletrônicas" desc="eletrônicas" image="/img/sunset lover.jpg" />
                </div>

            </nav>

        </aside>
    )
}
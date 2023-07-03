import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, AlignJustify, Laptop2, Volume, Maximize2, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-800 p-3 grid grid-cols-3 items-center">
            <div className="flex items-center gap-3">
                <Image src="/img/sunset lover.jpg" width={56} height={56} alt="Capa do album do DJ pepit Biscuit" />
                <div className="flex flex-col">
                    <strong className="font-formal">Suntet Lover</strong>
                    <span className="text-xs text-zinc-400">Pepit Biscuit</span>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-5">
                    <Shuffle size={22} className="text-zinc-400 hover:text-zinc-200 cursor-pointer" />
                    <SkipBack fill="rgb(161 161 170 / var(--tw-text-opacity))" size={22} className="text-zinc-400 cursor-pointer" />
                    <button className="w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                        <Play fill='bg-black' size={20} />
                    </button>
                    <SkipForward fill="rgb(161 161 170 / var(--tw-text-opacity))" size={22} className="text-zinc-400 cursor-pointer" />
                    <Repeat size={22} className="text-zinc-400 hover:text-zinc-200 cursor-pointer" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="texte-xs text-zinc-400">0:31</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600">
                        <div className="bg-zinc-300 hover:bg-green-600 w-20 h-1 rounded-full cursor-pointer"></div>
                    </div>
                    <span className="texte-xs text-zinc-400">2:31</span>
                </div>
            </div>
            <div className="flex items-center gap-3 justify-end">
                <Mic2 size={20} className="text-zinc-400 hover:text-zinc-200 cursor-pointer" />
                <AlignJustify size={20} className="text-zinc-400 hover:text-zinc-200 cursor-pointer" />
                <Laptop2 size={20} className="text-zinc-400 hover:text-zinc-200 cursor-pointer" />
                <div className="flex items-center gap-2">
                    <Volume size={20} className="text-zinc-400 hover:text-zinc-200 cursor-pointer" />
                    <div className="h-1 rounded-full w-24 bg-zinc-600">
                        <div className="bg-zinc-300 hover:bg-green-600 w-10 h-1 rounded-full cursor-pointer"></div>
                    </div>
                </div>
                <Maximize2 size={20} className="text-zinc-400 hover:text-zinc-200 cursor-pointer" />
            </div>
        </footer>
    )
}
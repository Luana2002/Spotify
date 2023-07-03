import { ReactNode } from "react"

interface itemMenuProps {
    item: string
    url: string
    icon: ReactNode
}
export function ItemMenu({ item, url, icon }: itemMenuProps) {
    return (
        <nav>
            <a href={url} className="flex text-sm font-semibold text-zinc-400 hover:text-zinc-100 gap-3 items-center">{icon}{item}</a>
        </nav>
    )
}
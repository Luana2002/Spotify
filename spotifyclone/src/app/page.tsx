import { MoreHorizontal } from "lucide-react";
import { Main } from "@/components/Main";
import { Aside } from "@/components/aside";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <nav className="bg-zinc-950 w-full h-10 absolute top-0 ps-3 p-3">
        <MoreHorizontal />
      </nav>
      <div className="flex flex-1  mt-10">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

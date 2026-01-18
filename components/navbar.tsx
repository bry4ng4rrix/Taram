import { BsFillTelephoneFill } from "react-icons/bs"; 
import { BiCalendar } from "react-icons/bi"; 
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const navbar = () => {
  return (
    <div className="bg-[#6FE0B3] text-white  p-1 top-0 z-50  border-b">
      <nav className="container mx-auto">
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-2'>
          <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          />
          <div className='flex flex-col'>
            <span className='font-bold text-2xl text-stone-950'>WEB</span>
            <span className='font-semibold text-xl text-stone-950'>DEVELOPMENT</span>
          </div>
          </Link>

          <div className='flex items-center gap-8 font-bold text-stone-950 text-xl'>
            <Link href='/'>Acceuil</Link>
            <Link href='/'>Offres</Link>
            <Link href='/'>Projets</Link>
            <Link href='/'>Guides</Link>
          </div>


          <div className="flex items-center gap-2">
            <Link href='/' ><Button className="h-14 font-bold text-2xl"><BiCalendar /> Prendre RDV</Button></Link>
            <Link href='/'><Button className="h-14 w-14"><BsFillTelephoneFill /></Button></Link>
          </div>

        </div>
      </nav>
      
    </div>
  )
}

export default navbar
import {Card , CardContent} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BiCalendar } from "react-icons/bi";
import { AiOutlineArrowDown } from "react-icons/ai";

const hero = () => {
  return (
   <div className=" w-full bg-stone-950 flex flex-col items-center mt-10  h-[calc(100vh-5rem)]  border-b border-[#6FE0B3]/30">
      {/* Search bar at the top */}
      <div className=" w-full max-w-2xl ">
        <Card className="rounded-full h-24 px-4 items-center shadow-[0_0_20px_5px_rgba(111,224,179,0.3)] hover:shadow-[0_0_25px_8px_rgba(111,224,179,0.4)] transition-all duration-300 border border-[#6FE0B3]/30 hover:border-[#6FE0B3]/50">
          <CardContent>
            <div className="flex justify-center items-center font-bold text-3xl gap-4">
              <img src="/logo.png" alt="Logo" className="h-10" />
              <p>Créer un site web vraiment unique</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mt-5  mx-auto text-center space-y-8">
        <h1 className="text-7xl md:text-7xl font-bold text-white leading-tight">
          Votre <span className="text-[#6FE0B3]">site</span> doit{" "}
          <span className="text-[#6FE0B3]">donner</span>
          <br />
          envie de rester, pas de
          <br />
          <span className="relative inline-block">
            <span className="text-[#6FE0B3]">revenir</span> en{" "}
            <span className="text-[#6FE0B3]">arrière</span>
            <span className="absolute left-0 top-1/2 w-full h-1 bg-stone-950 -translate-y-1/2"></span>
          </span>
          .
        </h1>

        <p className="text-xl font-semibold text-stone-300">
          Design moderne, SEO solide, Suivi complet : <br /> on construit un
          site qui retient vos visiteurs et vous apporte des <br /> résultats.
        </p>

        <div className="flex flex-row items-center gap-4 justify-center pt-4">
          <div className="relative">
            <Button
              className="bg-linear-to-r from-[#7EE0B8] to-[#5BCB9A]/50 hover:bg-green-600 
                           text-stone-950 px-10 py-6 text-2xl font-bold rounded-lg h-16 flex items-center justify-center"
            >
              <BiCalendar /> Prendre RDV
            </Button>
            
              <img src="/click.png" alt="Click" className="h-24 w-auto absolute -bottom-20 left-10 transform -translate-x-1/2 flex flex-col items-center" />
             
            
          </div>
          <Button
            variant="outline"
            className="bg-stone-950 px-8 py-6 text-2xl font-bold text-[#6FE0B3] border-[#6FE0B3] rounded-lg h-16 flex items-center justify-center"
          >
            Découvrir nos projets <AiOutlineArrowDown />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default hero
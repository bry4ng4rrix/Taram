import { AiOutlineArrowRight } from "react-icons/ai"; 
import { BiCalendar } from "react-icons/bi"; 
import { Card, CardContent  , CardFooter} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const page = () => {

        const card = [
          {
            title: "JWL Marketing",
            description: "Suivez l’avancement du projet et recevez un lien d’accès dès le départ.",
            badge : ["Site Vitrine/E-commerce" , "SEO" , "Design sur-mesure" , "API's"]
           
          },
          {
            title: "RGreenBeamCraft",
            description: "Engagement sur les objectifs fixés ou ajustement jusqu’à satisfaction complète.",
            badge : ["Site E-commerce" , "Configurateur 2D/3D" , "Interface admin" , "API's"]
          },
          {
            title: "Portfolio [DEMO]",
            description: "100% de clients satisfaits, accompagnement humain et suivi sur-mesure.",
            badge : ['Site vitrine' , 'Design sur mesure' ,'Animations Motion' , "API's" ]
          },
          
          
        ]

  return (
    <div className="min-h-screen w-full bg-stone-950 flex flex-col items-center mt-10  p-4 border-b border-[#6FE0B3]/30">
      <div className="flex flex-col justify-center items-center gap-4">
        <div>
          <img src="/ampoule.png" alt="" className="h-80 w-auto" />
        </div>
        <div>
          <h1 className="text-white text-4xl font-bold">
            Le détail au <span className="text-6xl text-[#ecba4d]">cœur</span>{" "}
            de chaque
            <span className="text-6xl  text-[#ecba4d]"> projet</span>{" "}
          </h1>
          <p></p>
        </div>
      </div>
    <div className="grid grid-cols-3 gap-10 mt-10 w-1/2 rounded-lg">
        {card.map((item, index) => (
          <Card key={index} 
                className="h-96 w-76 rounded-4xl bg-linear-to-r from-[#5BCB9A]/50 to-[#7EE0B8]">
            <CardContent>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-5">
              {item.badge.map((badge, index) => (
                <Badge key={index}>{badge}</Badge>
              ))}
            </CardFooter>
          </Card>
         ))}

    </div>
    <div className="mt-10">
        <Button  size="lg" className="bg-green-200 text-stone-950 h-16 font-bold text-2xl">
            <BiCalendar className="h-24 w-24"/> Prendre RDV <AiOutlineArrowRight />
        </Button>
    </div>

    </div>
  );
};

export default page;

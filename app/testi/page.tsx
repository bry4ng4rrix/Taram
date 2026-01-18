import {Card , CardContent} from "@/components/ui/card"
import { Button } from "@/components/ui/button"




const page = () => {


const card = [
    {
        title : "Suivi instantané",
        description : "Suivez l’avancement du projet et recevez un lien d'accès dès le départ."
    },
    {
        title : "Résultats garantis",
        description : "Engagement sur les objectifs fixés ou ajustement jusqu'à satisfaction complète."
    },
    {
        title : "Fiabilité totale",
        description : "100 % de clients satisfaits, accompagnement humain et suivi sur-mesure."
    },
    {
        title : "Rapidité au RDV",
        description : "Projet rendu avant la date prévue ou réduction immédiate sur le solde."
    },
]



  return (
    <div className="min-h-screen w-full flex flex-col items-center mt-10 p-4 border-B">
        <div className="flex flex-col justify-center items-center gap-4">
            <div>
            <img src="/fille.png" alt=""  className="h-80 w-auto"/>
            </div>
            <div>
                <h1 className="text-white text-4xl font-bold ">Mais <span className="text-[#6FE0B3] text-6xl"> où </span>
                est la <span className="text-[#6FE0B3] text-6xl">différence</span> ?

                </h1>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-10">
                {card.map((item, index) => (
                     <Card key={index} 
                className="h-48 rounded-4xl bg-linear-to-r from-[#5BCB9A]/50 to-[#7EE0B8]">
            <CardContent>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </CardContent>
          </Card>
                ))}
            </div>

        </div>


    </div>

  )
}

export default page
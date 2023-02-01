import { useEffect, useState } from "react"
import ArticleVente from "../components/atoms/ArticleVente"
import Layout from "../components/template/Layout"

interface IVenteVelosProps{
    pageName: string;
}
const VenteVelos = ({pageName} : IVenteVelosProps) => {

    const [articles, setArticles] = useState<IArticle[]>([
        {
            title: "Vélo de route",
            description: "Le vélo de route Lapierre est conçu pour les cyclistes passionnés cherchant performance et confort. Avec son cadre en aluminium léger et rigide, il offre une conduite rapide et réactive. Équipé de composants de qualité supérieure, ce vélo est parfait pour les sorties longues et les entraînements intensifs. Sa géométrie ajustée et son design élégant en font également un choix populaire pour les cyclistes recherchant un look professionnel sur la route.",
            image: "https://www.cdiscount.com/pdt2/8/1/9/1/700x700/mp45006819/rw/winice-velo-electrique-de-montagne-26-velo-vtt-h.jpg",
            prix: "1000",
            tag: "Vélo de route éléctrique"
        },
        {
            title: "Vélo de route pour enfant",
            description: "Vélo pour enfant Lapierre - Conçu pour les jeunes cyclistes ambitieux, ce vélo de route a un cadre en aluminium léger pour une conduite rapide et réactive. Équipé de composants de qualité, idéal pour les sorties longues et les entraînements. Design élégant pour un look professionnel sur la route.",
            image: "https://www.cdiscount.com/pdt2/2/5/1/1/1200x1200/mp35508251/rw/velo-enfant-evolutive-20-pouces-bikestar-pour.jpg",
            prix: "700",
            tag: "Vélo de route éléctrique"
        },
        {
            title: "Vélo tout terrain",
            description: "Roulez avec confiance sur le VTT tout-terrain de Lapierre. Ce vélo hautes performances et confortable est doté d'un cadre en aluminium léger et rigide pour une conduite rapide et réactive. Avec des composants de qualité supérieure, ce vélo est parfait pour les sorties longues et les entraînements intensifs. Sa géométrie ajustée et son design élégant en font également un choix populaire pour les cyclistes recherchant un look professionnel sur la route. Obtenez le vôtre dès maintenant pour seulement 1500 ! Expérimentez la puissance du VTT électrique tout-terrain.",
            image: "https://wegoboard.com/6077-large_default/velo-electrique-fly770.jpg",
            prix: "1500",
            tag: "VTT éléctrique"
        },
    ])


    return (
        <Layout>
            <div className="pt-10 min-h-screen px-20">
                <div className="flex justify-between px-8">
                    <h1 className="text-4xl font-bold text-center mb-3 md:text-start">Vente vélo éléctrique</h1>
                </div>
            <div className={`grid grid-cols-1 ${articles.length > 0 ? "md:grid-cols-3" : "md:grid-cols-1"}`}>
                {articles.length > 0 ? articles.map((article, index) => (
                    <div key={index}>
                        <ArticleVente key={index} title={article.title} description={article.description} image={article.image} prix={article.prix} tag={article.tag}/>
                    </div>
                    
                )) : 
                <div className="flex justify-center items-center h-screen w-full">
                    <p className="text-2xl font-bold text-center mb-3 md:text-center">Aucun article trouvé</p>
                </div>
                }
            </div>

            </div>
        </Layout>
    )
}

export default VenteVelos
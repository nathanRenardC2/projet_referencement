import { useState } from "react"
import ArticleVente from "../components/atoms/ArticleVente"
import Layout from "../components/template/Layout"
import bequille from '../assets/images/bequille.webp';
import roue from '../assets/images/roue.png';
import guidon from '../assets/images/guidon.jpg';

const VentePieces = () => {

    const [articles, setArticles] = useState<IArticle[]>([
        {
            title: "Béquille de vélo éléctrique",
            description: "Le vélo de route Lapierre est conçu pour les cyclistes passionnés cherchant performance et confort. Avec son cadre en aluminium léger et rigide, il offre une conduite rapide et réactive. Équipé de composants de qualité supérieure, ce vélo est parfait pour les sorties longues et les entraînements intensifs. Sa géométrie ajustée et son design élégant en font également un choix populaire pour les cyclistes recherchant un look professionnel sur la route.",
            image: bequille,
            prix: "20",
            tag: "Pièce détachée"
        },
        {
            title: "Roue de vélo éléctrique",
            description: "Le vélo de route Lapierre est conçu pour les cyclistes passionnés cherchant performance et confort. Avec son cadre en aluminium léger et rigide, il offre une conduite rapide et réactive. Équipé de composants de qualité supérieure, ce vélo est parfait pour les sorties longues et les entraînements intensifs. Sa géométrie ajustée et son design élégant en font également un choix populaire pour les cyclistes recherchant un look professionnel sur la route.",
            image: roue,
            prix: "50",
            tag: "Pièce détachée"
        },
        {
            title: "Guidon de vélo éléctrique",
            description: "Le vélo de route Lapierre est conçu pour les cyclistes passionnés cherchant performance et confort. Avec son cadre en aluminium léger et rigide, il offre une conduite rapide et réactive. Équipé de composants de qualité supérieure, ce vélo est parfait pour les sorties longues et les entraînements intensifs. Sa géométrie ajustée et son design élégant en font également un choix populaire pour les cyclistes recherchant un look professionnel sur la route.",
            image: guidon,
            prix: "15",
            tag: "Pièce détachée"
        },
    ])

    return (
        <Layout>
            <div className="pt-10 min-h-screen px-20">
            <div className="grid grid-cols-1 md:grid-cols-3">
                {articles.map((article, index) => (
                    <div>
                        <ArticleVente key={index} title={article.title} description={article.description} image={article.image} prix={article.prix} tag={article.tag}/>
                    </div>
                    
                ))}
            </div>

            </div>
        </Layout>
    )
}

export default VentePieces
import { useState } from "react"
import ArticleVente from "../components/atoms/ArticleVente"
import Layout from "../components/template/Layout"

const VenteVelos = () => {

    const [articles, setArticles] = useState<IArticle[]>([
        {
            title: "Vélo de route",
            description: "Le vélo de route Lapierre est conçu pour les cyclistes passionnés cherchant performance et confort. Avec son cadre en aluminium léger et rigide, il offre une conduite rapide et réactive. Équipé de composants de qualité supérieure, ce vélo est parfait pour les sorties longues et les entraînements intensifs. Sa géométrie ajustée et son design élégant en font également un choix populaire pour les cyclistes recherchant un look professionnel sur la route.",
            image: "https://media.intersport.fr/is/image/intersportfr/5008712EEO_PR?$produit_l$",
            prix: "1000",
            tag: "Vélo de route éléctrique"
        },
        {
            title: "Vélo de route",
            description: "Le vélo de route Lapierre est conçu pour les cyclistes passionnés cherchant performance et confort. Avec son cadre en aluminium léger et rigide, il offre une conduite rapide et réactive. Équipé de composants de qualité supérieure, ce vélo est parfait pour les sorties longues et les entraînements intensifs. Sa géométrie ajustée et son design élégant en font également un choix populaire pour les cyclistes recherchant un look professionnel sur la route.",
            image: "https://media.intersport.fr/is/image/intersportfr/5008712EEO_PR?$produit_l$",
            prix: "700",
            tag: "Vélo de route éléctrique"
        },
        {
            title: "Vélo de route",
            description: "Le vélo de route Lapierre est conçu pour les cyclistes passionnés cherchant performance et confort. Avec son cadre en aluminium léger et rigide, il offre une conduite rapide et réactive. Équipé de composants de qualité supérieure, ce vélo est parfait pour les sorties longues et les entraînements intensifs. Sa géométrie ajustée et son design élégant en font également un choix populaire pour les cyclistes recherchant un look professionnel sur la route.",
            image: "https://media.intersport.fr/is/image/intersportfr/5008712EEO_PR?$produit_l$",
            prix: "1500",
            tag: "VTT éléctrique"
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

export default VenteVelos
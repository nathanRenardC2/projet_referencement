import { useEffect, useState } from "react"
import ArticleLocation from "../components/atoms/ArticleLocation"
import Layout from "../components/template/Layout"

interface IVenteVelosProps{
    pageName: string;
}
const LocationVelos = ({pageName} : IVenteVelosProps) => {

    useEffect(() => {
        document.title = pageName;
      }, [pageName]);

    const [articles, setArticles] = useState<IArticle[]>([
        {
            title: "Vélo de route",
            description: "Le vélo électrique de ville est un type de vélo électrique conçu pour une utilisation urbaine quotidienne. Il a des caractéristiques telles que des pneus larges pour une meilleure stabilité sur les routes pavées, un cadre bas pour un enjambement facile, une selle confortable pour de longues distances, un éclairage et des feux de frein pour une meilleure visibilité et sécurité, ainsi qu'un porte-bagages pour transporter des objets. Les vélos électriques de ville sont souvent dotés d'un moteur puissant et d'une batterie de grande capacité ce qui est un supe choix pour la location de velo fournit avec son cadenas ",
            image: "https://www.natureetdecouvertes.com/fstrz/r/s/cache.natureetdecouvertes.com/Medias/Images/Articles/97634590/97634590-v-lo-de-ville-lectrique-velobecane-easy_1.jpg?width=610&height=610",
            prix: "30",
            tag: "Vélo de route éléctrique"
        },
        {
            title: "Vélo de route",
            description: "Le Kommoda est un vélo électrique unique. A la fois vélo de ville et vélo tout-terrain, son cadre bas, sa selle dotée d'une mousse de rembourrage et sa double suspension font de lui un vélo ultra-confortable. Son allure original se differencie de ce qui existe actuellement sur la marché. Essayez-le, vous nous en direz des nouvelles!",
            image: "https://cdn.shopify.com/s/files/1/0308/7024/1420/products/orange-1_696x464.jpg?v=1668396708",
            prix: "50",
            tag: "Vélo de route éléctrique"
        },
        {
            title: "Vélo de route",
            description: "Le vélo urbain de GAYA est conçu pour s'adapter à la vie urbaine et rock-and-roll de tout le monde. Équipé de technologies antivol connectées et d'une batterie durable fabriquée en France, il offre une expérience de conduite stable et confortable avec un grand phare et des clignotants pour plus de sécurité. Profitez d'une liberté de mouvement renouvelée avec ce vélo qui vous donnera envie d'aller plus loin. Sa géométrie ajustée et son design élégant en font également un choix populaire pour les cyclistes recherchant un look professionnel sur la route.",
            image: "https://cdn.shopify.com/s/files/1/0602/6821/6471/products/01_1024x1024.jpg?v=1654109287",
            prix: "20",
            tag: "VTT éléctrique"
        },
    ])

    return (
        <Layout>
            <div className="pt-10 min-h-screen px-20">
                <h1 className="text-4xl font-bold text-center mb-3 md:text-start">Location vélo éléctrique</h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {articles.map((article, index) => (
                    <div key={index}>
                        <ArticleLocation key={index} title={article.title} description={article.description} image={article.image} prix={article.prix} tag={article.tag}location={true} />
                    </div>
                    
                ))}
            </div>

            </div>
        </Layout>
    )
}

export default LocationVelos
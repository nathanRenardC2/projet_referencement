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
            description: "Un accessoire pratique pour les propriétaires de vélos électriques. Elle se fixe facilement sur la fourche ou le cadre du vélo et peut être déployée en un seul mouvement pour maintenir le vélo en position stable. Ce produit est fabriqué à partir de matériaux de haute qualité pour garantir une durabilité maximale et une performance optimale. La béquille de vélo électrique est compacte et légère, ce qui la rend facile à transporter et à ranger lorsqu'elle n'est pas utilisée. Elle est également facile à installer et ne nécessite aucun outil. En choisissant ce produit, vous pouvez vous assurer que votre vélo électrique reste en position stable et en bon état, même lorsqu'il n'est pas utilisé.",
            image: bequille,
            prix: "20",
            tag: "Pièce détachée"
        },
        {
            title: "Roue de vélo éléctrique",
            description: "Composant crucial pour le bon fonctionnement et la performance d'un vélo électrique. Elles jouent un rôle important dans la stabilité, la maniabilité et la sécurité du vélo. Les roues de vélo électrique peuvent être fabriquées à partir de différents matériaux, tels que l'aluminium, le carbone ou la fibre de verre, et peuvent être disponibles dans différentes tailles et configurations pour s'adapter à différents types de terrains et de conditions météorologiques. Il est important de choisir des roues de vélo électrique de qualité supérieure pour garantir la longue durée de vie et la performance optimale de votre vélo électrique.",
            image: roue,
            prix: "50",
            tag: "Pièce détachée"
        },
        {
            title: "Guidon de vélo éléctrique",
            description: "Le guidon de vélo électrique est un composant important pour le contrôle et la conduite de votre vélo électrique. Il peut être en forme de V, en forme de droite, avec des poignées ergonomiques ou avec des commandes intégrées. Le choix du guidon dépend du style de conduite et du confort personnel de l'utilisateur. Il est important de choisir un guidon de vélo électrique qui est solide, durable et adapté à vos besoins.",
            image: guidon,
            prix: "15",
            tag: "Pièce détachée"
        },
    ])

    return (
        <Layout>
            <div className="pt-10 min-h-screen px-20">
                <h1 className="text-4xl font-bold text-center mb-3 md:text-start">Vente pièces détachées</h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {articles.map((article, index) => (
                    <div key={index}>
                        <ArticleVente key={index} title={article.title} description={article.description} image={article.image} prix={article.prix} tag={article.tag}/>
                    </div>
                    
                ))}
            </div>

            </div>
        </Layout>
    )
}

export default VentePieces
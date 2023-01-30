import Layout from "../components/template/Layout";
import firstimage from '../assets/images/landing-image.jpg';
import secondeImage from '../assets/images/velo-route.jpg';
import Carousel from "../components/atoms/Carousel";
import { useEffect, useState } from "react";
import Card from "../components/atoms/Card";
import svg1 from '../assets/images/clic.svg';
import svg2 from '../assets/images/sun.svg';
import svg3 from '../assets/images/like.svg';
import { setInterval } from "timers/promises";

const Home = () => {

    const [images, setImages] = useState<IImage[]>(
        [
            {
                id: "1",
                url: firstimage,
                alt: 'landing image'
            },
            {
                id: "2",
                url: secondeImage,
                alt: 'landing image'
            },
        ]
    );

    const [cards, setCards] = useState<ICard[]>(
        [
            {
                id: "1",
                title: "Votre vélo en 1 clic",
                description: "Découvrez VéloEco+ : l'application pour acheter ou louer un vélo en toute simplicité. Choisissez parmi une large sélection de vélos de qualité pour répondre à vos besoins.",
                image: svg1
            },
            {
                id: "2",
                title: "Des vélos écologiques",
                description: "VéloEco+ s'engage pour la planète en proposant une gamme de vélos écologiques pour une mobilité durable.",
                image: svg2
            },
            {
                id: "3",
                title: "Services inclus",
                description: "Bénéficiez de nombreux services en plus de votre location de vélo : maintenance, assurance, support en cas de panne, etc.",
                image: svg3
            },
        ]
    );
            
  return (
    <>
        <Layout>
            <section className="shadow-md">
                <Carousel items={images}/>
            </section>
            <article className="px-20">
                <section className="flex flex-col md:flex-row items-stretch justify-center">
                    {cards.map((card) => (
                        <Card key={card.id} title={card.title} description={card.description} image={card.image}/>
                    ))}
                </section>
            </article>
        </Layout>
    </>
  )
};

export default Home;
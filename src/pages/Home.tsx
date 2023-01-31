import Layout from "../components/template/Layout";
import firstimage from '../assets/images/landing-image.jpg';
import secondeImage from '../assets/images/velo-route.jpg';
import Carousel from "../components/atoms/Carousel";
import { useState } from "react";
import Card from "../components/atoms/Card";
import svg1 from '../assets/images/clic.svg';
import svg2 from '../assets/images/sun.svg';
import svg3 from '../assets/images/like.svg';
import logo_durabilitrip from '../assets/images/logo-partenaire.png';
import logo_intersport from '../assets/images/logo-intersport.png';

const Home = () => {

    const [images] = useState<IImage[]>(
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

    const [cards] = useState<ICard[]>(
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
            <article className="px-20 mt-10">
                <h2 className="text-4xl">VéloEco +</h2>
                <hr className="my-4 border rounded border-gray-300" />
                <section className="flex flex-col md:flex-row items-stretch justify-center">
                    {cards.map((card) => (
                        <Card key={card.id} title={card.title} description={card.description} image={card.image}/>
                    ))}
                </section>
            </article>
            <article className="px-20 mt-10">
                <h2 className="text-4xl">Partenaires</h2>
                <hr className="my-4 border rounded border-gray-300" />
                <div className="flex flex-col md:flex-row justify-center items-center pt-10 md:px-36">
                    <a className="flex flex-col justify-center items-center mr-20 mb-5 md:mb-0 w-96" href="https://www.google.com">
                        <img src={logo_durabilitrip} alt="logo partenaire Durabilitrip" />
                    </a>
                    <a className="flex flex-col justify-center items-center mr-20 mb-5 md:mb-0 w-96" href="https://www.intersport.fr/">
                        <img src={logo_intersport} alt="logo partenaire intersport" />
                    </a>
                </div>
            </article>
        </Layout>
    </>
  )
};

export default Home;
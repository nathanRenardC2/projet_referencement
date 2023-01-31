
import hammer from "../assets/images/hammer-outline.svg";
import skull from "../assets/images/skull-outline.svg";
import sparkles from "../assets/images/sparkles-outline.svg";
import speedometer from "../assets/images/speedometer-outline.svg";
import water from "../assets/images/water-outline.svg";
import batterie from "../assets/images/batterie-outline.svg";
import Layout from "../components/template/Layout";

const Entretien = () => {
    return (
        <Layout>
            <main className="flex flex-col justify-center items-center pt-20 py-6">
                <h1 className="text-4xl font-bold text-center mb-3 md:text-start">Entretenir son véloEco+</h1>
                <p className="py-3 text-center mb-3 md:text-start">Prendre soin de votre vélo électrique est essentiel pour garantir une performance fiable, une conduite en toute sécurité
                et une durée de vie maximale</p>
                <article className="w-full">
                    <section className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
                        <div className="box-content w-full border-4 flex flex-col justify-center items-center my-6 w-2/3 md:w-1/5 p-4">
                            <h2 className="text-2xl font-bold text-gray-500">La pression</h2>
                            <img src={speedometer} alt="" className="w-8 py-3" />
                            <p className="text-justify px-3">La pression des pneus est un élément important pour une expérience de conduite en toute sécurité et efficace. Il est
                            important de vérifier régulièrement la pression des pneus pour éviter les crevaisons et garantir une performance
                            optimale.</p>
                        </div>
                        <div className="box-content w-full border-4 flex flex-col justify-center items-center my-6 w-2/3 md:w-1/5 p-4">
                            <h2 className="text-2xl font-bold text-gray-500">La batterie</h2>
                            <img src={batterie} alt="" className="w-8 py-3" />
                            <p className="text-justify px-3">La batterie est le cœur de votre vélo électrique, il est donc important de la recharger et de la stocker correctement.
                            Assurez-vous de ne pas la laisser se décharger complètement et de la garder dans un endroit sec et frais pour une durée
                            de vie maximale.</p>
                        </div>
                        <div className="box-content w-full border-4 flex flex-col justify-center items-center my-6 w-2/3 md:w-1/5 p-4">
                            <h2 className="text-2xl font-bold text-gray-500">La performance</h2>
                            <img src={sparkles} alt="" className="w-8 py-3" />
                            <p className="text-justify px-3">Les composants tels que la chaîne peuvent rapidement accumuler de la saleté et de la rouille, ce qui peut affecter la
                            performance du vélo. Il est donc important de les nettoyer régulièrement pour maintenir un fonctionnement optimal.</p>
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row items-center md:items-stretch justify-center md:space-x-8">
                        <div className="box-content border-4 flex flex-col justify-center items-center my-6 w-2/3 md:w-1/5 p-4">
                            <h2 className="text-2xl font-bold text-gray-500">Les freins</h2>
                            <img src={hammer} alt="" className="w-8 py-3" />
                            <p className="text-justify px-3">Les freins sont un élément de sécurité crucial pour votre vélo électrique, il est donc important de les vérifier
                            régulièrement pour s'assurer qu'ils fonctionnent correctement. Si vous remarquez des signes d'usure ou de faiblesse, il
                            peut être nécessaire de les serrer ou de les faire remplacer.</p>
                        </div>
                        <div className="box-content border-4 flex flex-col justify-center items-center my-6 w-2/3 md:w-1/5 p-4">
                            <h2 className="text-2xl font-bold text-gray-500">La lubrification</h2>
                            <img src={water} alt="" className="w-8 py-3" />
                            <p className="text-justify px-3">La lubrification de la chaîne peut améliorer la performance de votre vélo électrique en réduisant la friction et en
                            évitant la corrosion. Il est donc important de lubrifier la chaîne régulièrement pour une meilleure performance.</p>
                        </div>
                        <div className="box-content border-4 flex flex-col justify-center items-center my-6 w-2/3 md:w-1/5 p-4">
                            <h2 className="text-2xl font-bold text-gray-500">Le moteur</h2>
                            <img src={skull} alt="" className="w-8 py-3" />
                            <p className="text-justify px-3">Si vous remarquez des problèmes de performance avec le moteur ou le système électrique, il est important de les faire
                            inspecter par un professionnel qualifié. Cela peut vous aider à résoudre les problèmes rapidement et à prolonger la
                            durée de vie de votre vélo électrique.</p>
                        </div>
                    </section>
                </article>
            </main>
        </Layout>
    )
}

export default Entretien
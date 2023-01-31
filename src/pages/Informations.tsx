import Layout from "../components/template/Layout"

const Informations = () => {
    return (
        <Layout>
            <main className="flex flex-col justify-center items-center py-10">
                <article className="flex justify-center mb-14">
                    <section className="w-10/12 box-content md:w-1/5 p-4">
                        <h1 className="text-5xl font-bold">Informations</h1>
                        <p className="py-6">Vous cherchez à acheter un vélo électrique fiable et performant ? Nous offrons des options de location de vélos électriques pour vous permettre de découvrir les avantages de la conduite électrique.
                        Vous êtes un passionné de vélo électrique et vous recherchez des accessoires pour améliorer votre expérience de conduite
                        ?</p>
                        <p className="font-bold">Nous avons tout ce qu'il vous faut, des cadenas aux béquilles, en passant par les batteries et les pièces détachées.
                        Prenez soin de votre vélo électrique en optant pour nos services d'entretien professionnel.</p>
                    </section>
                    <section className="box-content hidden md:block w-1/5 p-4">
                        <img src="https://img.freepik.com/photos-gratuite/reparateur-qualifie-travaille-machine-outil-dans-atelier-bucycle-tres-frequente_613910-21483.jpg?w=740&t=st=1675152991~exp=1675153591~hmac=f84792dc63a5d31ba94f80a1b469642c398a93b5110a957764c1bb315aa0898b" alt="image_illustrative" className="w-full" />
                    </section>
                </article>
                <article className="flex flex-col md:flex-row justify-center items-center md:items-stretch">
                    <section className="box-content w-10/12 md:w-3/12 p-4">
                        <div className="flex items-center mb-5">
                            <p className="text-5xl text-gray-500">01</p>
                            <h2 className="text-2xl font-bold px-3">Vente de vélo électrique</h2>
                        </div>
                        <p>Chez nous, vous pouvez acheter un vélo électrique de qualité supérieure à un prix compétitif. Nous avons une large sélection de modèles pour répondre à tous les besoins et styles de conduite. De plus, nos experts sont là pour vous conseiller et vous aider à choisir le vélo électrique qui conviendra le mieux à vos besoins.</p>
                    </section>
                    <section className="box-content w-10/12 md:w-3/12 p-4">
                        <div className="flex items-center mb-5">
                            <p className="text-5xl text-gray-500">02</p>
                            <h2 className="text-2xl font-bold px-3">Location de vélo électrique</h2>
                        </div>
                        <p>Si vous cherchez une solution de mobilité pour une période déterminée, la location de vélo électrique est un excellent choix. Chez nous, vous pouvez louer des vélos électriques de qualité supérieure à un prix abordable. Que vous souhaitiez explorer la ville, faire du tourisme ou simplement vous détendre, nous avons le vélo électrique idéal pour vous. De plus, nos experts sont là pour vous aider à choisir le vélo électrique qui conviendra le mieux à vos besoins et pour vous fournir toutes les informations nécessaires sur la location.</p>
                    </section>
                    <section className="box-content w-10/12 md:w-3/12 p-4">
                        <div className="flex items-center mb-5">
                            <p className="text-5xl text-gray-500">03</p>
                            <h2 className="text-2xl font-bold px-3">Vente de pièces détachées</h2>
                        </div>
                        <p>Vous pouvez acheter des pièces détachées de haute qualité pour votre vélo électrique. Nous avons une large sélection de produits, y compris des batteries, des moteurs, des cadres, des pneus, des freins, etc. De plus, nos prix sont compétitifs pour vous offrir un excellent rapport qualité-prix. N'attendez plus pour prendre soin de votre vélo électrique et achetez vos pièces détachées dès aujourd'hui !</p>
                    </section>
                </article>
            </main>
        </Layout>
    )
}

export default Informations
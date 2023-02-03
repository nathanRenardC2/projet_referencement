
interface ICardProps{
    title: string;
    description: string;
    image: any;
}

const Card = ({title, description, image} : ICardProps) => {
    return (
        <div className="m-10 p-10 shadow-md flex flex-col items-center w-full bg-white rounded-lg shadow">
            <img className="h-20 w-20" src={image} alt={`icone_${title}`} />
            <span className="border-b-2 pb-5 border-gray-300 w-2/3"></span>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mb-5 mt-2">{title}</h5>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
            </div>
        </div>
    )
}

export default Card;
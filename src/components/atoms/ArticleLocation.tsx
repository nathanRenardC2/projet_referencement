import React from 'react'


interface IArticleProps{
    title: string;
    description: string;
    image: any;
    prix: string;
    tag: string;
    location ?: boolean;
}
const ArticleLocation = ({title, description, image, prix, tag, location} : IArticleProps) => {
    return (
            <article className="w-full p-4 cursor-pointer">
                <section className="block bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="relative pb-48 overflow-hidden">
                        <img className="absolute inset-0 h-full w-full object-scale-down" src={image}
                            alt="" />
                    </div>
                    <div className="p-4">
                        <span
                            className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{tag}</span>
                        <span
                            className="inline-block px-2 py-1 leading-none bg-purple-200 text-purple-800 rounded-full font-semibold uppercase tracking-wide text-xs ml-2">Location</span>
                        <h2 className="mt-2 mb-2  font-bold">{title}</h2>
                        <p className="text-sm text-justify">{description.slice(0, 280)}...</p>
                        <div className="mt-3 flex items-center">
                            <span className="text-sm font-semibold">prix</span>&nbsp;<span
                                className="font-bold text-xl">{prix}</span>&nbsp;<span className="text-sm font-semibold">€{location && "/h"}</span>
                        </div>
                    </div>
                    <div className="p-4 border-t border-b text-xs text-gray-700">
                        <a href="#" className="mt-3 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Louer
                        </a>
                    </div>
                </section>
            </article>
    )
}

export default ArticleLocation
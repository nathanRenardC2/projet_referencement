interface IImage {
    id: string;
    url: string;
    alt: string;
}

interface ICard{
    id: string;
    title: string;
    description: string;
    image: string
}

interface IArticle {
    title: string;
    description: string;
    image: any;
    prix: string;
    tag: string;
}
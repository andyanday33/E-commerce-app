export interface IProduct {
    id: number,
    name: string,
    brand: string,
    description: string,
    price: number,
    imageUrl: string,
    quantityInStock: number,
    type: string,
}

export interface ICatalogProps {
    products: IProduct[] | undefined,
    error: string | undefined,
}
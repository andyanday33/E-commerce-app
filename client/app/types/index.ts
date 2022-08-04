export interface IProduct {
    id: number,
    name: string,
    brand: string,
    description: string,
    price: number,
    pictureUrl: string,
    quantityInStock: number,
    type: string,
}

export interface ICatalogProps {
    products: IProduct[] | undefined,
    error: string | undefined,
}

export interface IProductListProps {
    products: IProduct[],
}

export interface IProductCardProps {
    product: IProduct,
}
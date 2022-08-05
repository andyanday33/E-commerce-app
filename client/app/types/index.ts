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

export interface IProductListProps {
    products: IProduct[],
}

export interface IProductCardProps {
    product: IProduct,
}
import { ProductModal } from "../models/product/product-modal";

export const getCapacity = (products: ProductModal[]): string[] => {
    let temp: [string[]] = [[]];
    for (let product of products) {
        temp.push(product.capacity);
    }
    let flat = [].concat.apply([], temp as any);

    let res = Array.from(new Set(flat));
    return res;
}
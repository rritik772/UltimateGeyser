
import { ProductModal } from "../models/product/product-modal";

export const getColors = (products: ProductModal[]): string[] => {
    let temp: [string[]] = [[]];
    for (let product of products) {
        temp.push(product.colors);
    }
    let flat = [].concat.apply([], temp as any);

    let res = Array.from(new Set(flat));
    return res;
}
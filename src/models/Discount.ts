import { DiscountType } from "./DiscountType";
import { ServiceType } from "./ServiceType";
import { ServiceYear } from "./ServiceYear";

export interface Discount {
    amount: number;
    year: ServiceYear;
    services: ServiceType[];
    type: DiscountType;
}
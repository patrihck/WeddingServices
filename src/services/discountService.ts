import { Service } from "../models/Service";
import { ServiceYear } from "../models/ServiceYear";
import { getDiscountsByYear } from "../repositories/discountRepository";
import lodash from "lodash";
import { Discount } from "../models/Discount";

export const applyDiscount = (services: Service[], year: ServiceYear) => {
    
    const discounts = getDiscountsByYear(year);
    const applicableDiscounts: Discount[] = [];
    for (let i = 0; i < discounts.length; i++) {
        if (discounts[i].services.every(serviceType => services.find(service => service.type === serviceType))) {
            applicableDiscounts.push(discounts[i])
        }
    }

    const weddingPackageDiscounts = applicableDiscounts.filter(discount => discount.type === 'WeddingSessionPackage');
    const photoVideoDiscounts = applicableDiscounts.filter(discount => discount.type === 'VideoPhotoPackage');
    
    let weddingPackageDiscountAmount = [0];
    weddingPackageDiscounts.forEach(disc => weddingPackageDiscountAmount.push(disc.amount))

    let photoVideoDiscountsAmount = [0];
    photoVideoDiscounts.forEach(disc => photoVideoDiscountsAmount.push(disc.amount));

    return Math.max(...weddingPackageDiscountAmount) + Math.max(...photoVideoDiscountsAmount);
};

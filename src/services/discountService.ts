import { Service } from "../models/Service";
import { ServiceYear } from "../models/ServiceYear";
import { getDiscountsByYear } from "../repositories/discountRepository";
import { Discount } from "../models/Discount";

export const applyDiscount = (services: Service[], year: ServiceYear) => {
    
    const discounts = getDiscountsByYear(year);
    const applicableDiscounts: Discount[] = [];

    discounts.forEach((discount) => {
        if (discount.services.every(serviceType => services.find(service => service.type === serviceType))) {
            applicableDiscounts.push(discount);
        }
    })

    const weddingPackageDiscounts = applicableDiscounts.filter(discount => discount.type === 'WeddingSessionPackage')
    .map(discount => discount.amount);
    const photoVideoDiscounts = applicableDiscounts.filter(discount => discount.type === 'VideoPhotoPackage')
    .map(discount => discount.amount);

    const weddingPackageAppliedDiscount = weddingPackageDiscounts.length ? Math.max(...weddingPackageDiscounts) : 0;
    const photoVideoAppliedDiscount = photoVideoDiscounts.length ? Math.max(...photoVideoDiscounts) : 0;
    return weddingPackageAppliedDiscount + photoVideoAppliedDiscount;
};

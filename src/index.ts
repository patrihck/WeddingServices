import lodash from "lodash";
import { ServiceType } from './models/ServiceType';
import { ServiceYear } from './models/ServiceYear';
import { updateServicesTypes } from "./helpers/updateServicesTypesListManager";
import { getServices } from "./repositories/serviceRepository";
import { applyDiscount } from "./services/discountService";

export const updateSelectedServices = (
    previouslySelectedServices: ServiceType[],
    action: { type: "Select" | "Deselect"; service: ServiceType }
) => {
    
    return updateServicesTypes(previouslySelectedServices, action);
    
};

export const calculatePrice = (selectedServiceTypes: ServiceType[], selectedYear: ServiceYear) => {
    const services = getServices(selectedServiceTypes, selectedYear);
    const basePrice = lodash.sumBy(services, service => service.price);
    const discount = applyDiscount(services, selectedYear);
    return {
        basePrice: basePrice,
        finalPrice: basePrice - discount
    }
}
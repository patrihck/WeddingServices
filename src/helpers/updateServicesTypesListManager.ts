import { ExtraServiceRelation } from '../models/ExtraServiceRelation';
import { ServiceType } from '../models/ServiceType';
import { extraServicesRelations } from '../repositories/extraServicesRelationRepository';

const checkIfShouldNotUpdateList = (previouslySelectedServices: ServiceType[],
    action: { type: "Select" | "Deselect"; service: ServiceType }) => {
        const serviceExtraRelation = extraServicesRelations.find(relation => relation.extraService === action.service);
        const selectedExtraServiceWithNoRelated = serviceExtraRelation && action.type === 'Select' && !previouslySelectedServices.find(service => serviceExtraRelation.standardServices.includes(service));
        const serviceSelectedSecondTime = (previouslySelectedServices.includes(action.service) && action.type === 'Select');
        const deselectedUnexistingService = (!previouslySelectedServices.includes(action.service) && action.type === 'Deselect');

        return  selectedExtraServiceWithNoRelated || serviceSelectedSecondTime || deselectedUnexistingService;
}

const updateStandardSelect = (previouslySelectedServices: ServiceType[],
    action: { type: "Select" | "Deselect"; service: ServiceType }) => {
    if (action.type === 'Select') {
        previouslySelectedServices.push(action.service);
        return previouslySelectedServices;
    } else {
        return previouslySelectedServices.filter(service => service !== action.service);
    }
}

const deselectRelatedService = (previouslySelectedServices: ServiceType[],
    action: { type: "Select" | "Deselect"; service: ServiceType }, serviceStandardRelation: ExtraServiceRelation) => {
    let reducedSelectedServices = previouslySelectedServices.filter(s => s !== action.service);
    if (!reducedSelectedServices.find(service => serviceStandardRelation.standardServices.includes(service))) {
        return reducedSelectedServices.filter(service => service !== serviceStandardRelation.extraService);
    } else {
        return reducedSelectedServices;
    }
}

export const updateServicesTypes = (previouslySelectedServices: ServiceType[],
    action: { type: "Select" | "Deselect"; service: ServiceType }) => {    
        if (checkIfShouldNotUpdateList(previouslySelectedServices, action)) {
            return previouslySelectedServices;
        }

        const serviceStandardRelation = extraServicesRelations.find(relation => relation.standardServices.includes(action.service))
        if (serviceStandardRelation && action.type === 'Deselect' && previouslySelectedServices.includes(serviceStandardRelation.extraService)) {
            return deselectRelatedService(previouslySelectedServices, action, serviceStandardRelation);
        }

        return updateStandardSelect(previouslySelectedServices, action);
}
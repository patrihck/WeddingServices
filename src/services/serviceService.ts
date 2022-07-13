import { ServiceType } from '../models/ServiceType';
import { ServiceYear } from '../models/ServiceYear';
import { getServices } from '../repositories/serviceRepository';

const validateBlueRay = (selectedServiceTypes: ServiceType[]) => {
    if (selectedServiceTypes.includes('BlurayPackage') && !selectedServiceTypes.includes('VideoRecording')) {
        const blueRayIndex = selectedServiceTypes.indexOf('BlurayPackage');
        selectedServiceTypes.splice(blueRayIndex);
        return selectedServiceTypes;
    }
}

const validateTwoDayEvent = (selectedServiceTypes: ServiceType[]) => {
    if (selectedServiceTypes.includes('TwoDayEvent') && !(selectedServiceTypes.includes('VideoRecording') || selectedServiceTypes.includes('Photography'))) {
        const twoDayEventIndex = selectedServiceTypes.indexOf('TwoDayEvent');
        return selectedServiceTypes.splice(twoDayEventIndex);
    }
}
const trimServiceTypes = (selectedServiceTypes: ServiceType[]) => {
    let reducedServiceTypes = validateBlueRay(selectedServiceTypes)
    return validateTwoDayEvent(reducedServiceTypes);    
}

export const getTrimmedServicesByYear = (selectedServiceTypes: ServiceType[], year: ServiceYear) => {
    const trimmedServiceTypes = trimServiceTypes(selectedServiceTypes);
    return getServices(trimmedServiceTypes, year);
}
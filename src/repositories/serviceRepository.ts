import { ServiceType } from '../models/ServiceType';
import { ServiceYear } from '../models/ServiceYear';
import { Service } from '../models/Service';

const services: Array<Service> = [
    { type: 'Photography', year: 2020, price: 1700 },
    { type: 'Photography', year: 2021, price: 1800 },
    { type: 'Photography', year: 2022, price: 1900 },
    { type: 'VideoRecording', year: 2020, price: 1700 },
    { type: 'VideoRecording', year: 2021, price: 1800 },
    { type: 'VideoRecording', year: 2022, price: 1900 },
    { type: 'WeddingSession', year: 2020, price: 600 },
    { type: 'WeddingSession', year: 2021, price: 600 },
    { type: 'WeddingSession', year: 2022, price: 600 },
    { type: 'BlurayPackage', year: 2020, price: 300 },
    { type: 'BlurayPackage', year: 2021, price: 300 },
    { type: 'BlurayPackage', year: 2022, price: 300 },
    { type: 'TwoDayEvent', year: 2020, price: 400 },
    { type: 'TwoDayEvent', year: 2021, price: 400 },
    { type: 'TwoDayEvent', year: 2022, price: 400 },
];

export const getServices = (types: ServiceType[], year: ServiceYear) => {
    return services.filter(service => types.includes(service.type) && year === service.year);
} 


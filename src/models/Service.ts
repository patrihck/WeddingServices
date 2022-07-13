import { ServiceType } from '../models/ServiceType';
import { ServiceYear } from '../models/ServiceYear';

export interface Service {
    type: ServiceType;
    year: ServiceYear;
    price: number;
}
import { ServiceType } from './ServiceType';
import { ExtraServiceType } from './ExtraServiceType';

export interface ExtraServiceRelation {
    extraService: ExtraServiceType;
    standardServices: ServiceType[];
}
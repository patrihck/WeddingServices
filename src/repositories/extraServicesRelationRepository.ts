import { ExtraServiceRelation } from '../models/ExtraServiceRelation';

export const extraServicesRelations: ExtraServiceRelation[] = [
    { extraService: 'BlurayPackage', standardServices: ['VideoRecording'] },
    { extraService: 'TwoDayEvent', standardServices: ['VideoRecording', 'Photography'] },
]
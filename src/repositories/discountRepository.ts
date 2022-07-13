import { Discount } from "../models/Discount";
import { ServiceYear } from "../models/ServiceYear";

const discounts: Discount[] = [
    { year: 2020, services: ['Photography', 'VideoRecording'], amount: (1700 + 1700) - 2200, type: 'VideoPhotoPackage' },
    { year: 2021, services: ['Photography', 'VideoRecording'], amount: (1800 + 1800) - 2300, type: 'VideoPhotoPackage' },
    { year: 2022, services: ['Photography', 'VideoRecording'], amount: (1900 + 1900) - 2500, type: 'VideoPhotoPackage' },
    { year: 2020, services: ['WeddingSession', 'VideoRecording'], amount: 600 - 300, type: 'WeddingSessionPackage' },
    { year: 2021, services: ['WeddingSession', 'VideoRecording'], amount: 600 - 300, type: 'WeddingSessionPackage' },
    { year: 2022, services: ['WeddingSession', 'VideoRecording'], amount: 600 - 300, type: 'WeddingSessionPackage' },
    { year: 2020, services: ['WeddingSession', 'Photography'], amount: 600 - 300, type: 'WeddingSessionPackage' },
    { year: 2021, services: ['WeddingSession', 'Photography'], amount: 600 - 300, type: 'WeddingSessionPackage' },
    { year: 2022, services: ['WeddingSession', 'Photography'], amount: 600 - 0, type: 'WeddingSessionPackage' },
]

export const getDiscountsByYear = (year: ServiceYear) => discounts.filter(discount => discount.year === year);
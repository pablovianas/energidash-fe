export type Invoices = {
    customerId: string;
    instalationId: string;
    referenceMonth: string;
    electricEnergyKwh: number;
    electricEnergyValue: number;
    sceeeEnergyKwh: number;
    sceeeEnergyValue: number;
    compensatedEnergyGdIKwh: number;
    compensatedEnergyGdIValue: number;
    municipalPublicLightingContributionValue: number;
}[];
import { Invoices } from "../@types/invoice";
import { sortedInvoices } from "./sortInvoices";

it('should correctly sort a list of invoices by reference month and year', () => {
    const filteredInvoices: Invoices = [
        {
            electricEnergyKwh: 50, 
            electricEnergyValue: 47.62,
            sceeeEnergyKwh: 585, 
            sceeeEnergyValue: 297.32,
            compensatedEnergyGdIKwh: 585,
            compensatedEnergyGdIValue: -285.08,
            municipalPublicLightingContributionValue: 49.43,
            customerId: '7202187422',
            instalationId: '3001117181',
            referenceMonth: 'NOV/2023'
        },
        {
            electricEnergyKwh: 50,
            electricEnergyValue: 44.56,
            sceeeEnergyKwh: 347, 
            sceeeEnergyValue: 212.28,
            
            compensatedEnergyGdIKwh: 347,
            compensatedEnergyGdIValue: -201.70,
    
            municipalPublicLightingContributionValue: 49.43,
            customerId: '7202187422',
            instalationId: '3001117181',
            referenceMonth: 'JUN/2023'
        },
    ]
    const expected = [
        {
            electricEnergyKwh: 50,
            electricEnergyValue: 44.56,
            sceeeEnergyKwh: 347,
            sceeeEnergyValue: 212.28,

            compensatedEnergyGdIKwh: 347,
            compensatedEnergyGdIValue: -201.70,

            municipalPublicLightingContributionValue: 49.43,
            customerId: '7202187422',
            instalationId: '3001117181',
            referenceMonth: 'JUN/2023'
        },
        {
            electricEnergyKwh: 50,
            electricEnergyValue: 47.62,
            sceeeEnergyKwh: 585,
            sceeeEnergyValue: 297.32,
            compensatedEnergyGdIKwh: 585,
            compensatedEnergyGdIValue: -285.08,
            municipalPublicLightingContributionValue: 49.43,
            customerId: '7202187422',
            instalationId: '3001117181',
            referenceMonth: 'NOV/2023'
        },
    ];
    const result = sortedInvoices(filteredInvoices);
    expect(result).toEqual(expected);
    expect(result).not.toBe(filteredInvoices);
});
import { Invoices } from "../@types/invoice";

export function sortedInvoices(filteredInvoices: Invoices){
    
    const result = filteredInvoices?.slice().sort((a, b) => {
        const monthsOrder = [
            'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'
        ];
    
        const monthA = monthsOrder.indexOf(a.referenceMonth.split('/')[0]);
        const yearA = parseInt(a.referenceMonth.split('/')[1]);
    
        const monthB = monthsOrder.indexOf(b.referenceMonth.split('/')[0]);
        const yearB = parseInt(b.referenceMonth.split('/')[1]);
    
        if (yearA !== yearB) {
            return yearA - yearB;
        }
    
        return monthA - monthB;
    });

    return result;
}

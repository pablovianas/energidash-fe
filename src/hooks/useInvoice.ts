import { useState } from "react";
import { useQuery } from "react-query";
import { getAllInvoices } from "../services";
import { Invoices } from "../@types/invoice";
import { sortedInvoices } from "../utils/sortInvoices";

export const useInvoice = () => {
    const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

    const { data } = useQuery<Invoices>("invoices", getAllInvoices, {
        refetchOnWindowFocus: false,
        cacheTime: 10
    })

    const dataWithTotal = data?.map(item => ({
        ...item,
        totalEnergyKwh: item.electricEnergyKwh + item.sceeeEnergyKwh,
        totalEnergyValue: (item.electricEnergyValue + item.sceeeEnergyValue + item.municipalPublicLightingContributionValue).toFixed(2)
    }));

    const customerList = new Set<string>();

    data?.forEach(item => {
        customerList.add(item.customerId)
    })

    const filteredInvoices = selectedCustomerId
        ? dataWithTotal?.filter((invoice) => invoice.customerId === selectedCustomerId)
        : dataWithTotal;

    const sortedInvoiceList = sortedInvoices(filteredInvoices!);

    return {
        sortedInvoiceList,
        customerList,
        setSelectedCustomerId,
        selectedCustomerId
    } 
}
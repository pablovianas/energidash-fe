
import { FormEvent, useState } from "react";
import { useInvoice } from "../../hooks/useInvoice";
import { downloadInvoice } from "../../services";
import * as S from './styles'

export const InvoicesLibrary = () => {
    const { sortedInvoiceList, customerList, setSelectedCustomerId, selectedCustomerId } = useInvoice(); 
    const [referenceMonth, setReferenceMonth] = useState<string | null>(null);
        
    const customers = referenceMonth ? sortedInvoiceList?.filter(invoice => invoice.customerId === selectedCustomerId && invoice.referenceMonth === referenceMonth) : sortedInvoiceList

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const data = {
            customerId: selectedCustomerId,
            referenceMonth: referenceMonth
        }

        try {
            
            const fileName = await downloadInvoice(data);

            window.location.href = `https://dashboard-api-5tym.onrender.com/api/invoices/download/${fileName}`

            setReferenceMonth(null);
            setSelectedCustomerId(null);
            
        } catch (error) {
            console.log(error)  
        }
    }

    return (
        <S.Form>
            <h2>Historico de faturas</h2>
            <select onChange={(e) => setSelectedCustomerId(e.target.value)}>
                <option value={""} defaultValue={""}>Selecione um cliente</option>
                {
                    Array.from(customerList).map(customer => (
                        <option key={customer} value={customer}>{customer}</option>
                    ))
                }
            </select>
            {
                selectedCustomerId && <>
                    <h2>Mês de referência</h2>
                    <select onChange={(e) => setReferenceMonth(e.target.value)}>
                        <option value={""}>Selecione um mês</option>
                        {
                            customers?.map(customer => (
                                <option key={customer.referenceMonth} value={customer.referenceMonth}>{customer.referenceMonth}</option>
                            ))
                        }
                    </select>
                    <button onClick={handleSubmit} >Faça o download</button>
                </>
            }
        </S.Form>
    )
}
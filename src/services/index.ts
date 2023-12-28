type invoiceDownloadData = {
    customerId: string | null;
    referenceMonth: string | null;
}

export async function getAllInvoices(){
    const response = await fetch(`https://dashboard-api-5tym.onrender.com/api/invoices`);
    return await response.json();
}
export async function downloadInvoice(data: invoiceDownloadData){
    const response = await fetch(`https://dashboard-api-5tym.onrender.com/api/invoices/download`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const { fileName } = await response.json();

    return fileName
}
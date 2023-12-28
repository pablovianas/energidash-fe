import { useInvoice } from '../../hooks/useInvoice';
import { CustomChart } from './components/Chart';
import * as S from './styles'

export const Home = () => {
    const  { customerList, sortedInvoiceList, setSelectedCustomerId } = useInvoice();   
    
    const firstChartInformations = [
        { dataKey: 'totalEnergyKwh', name: 'Consumo de Energia Elétrica KWh', fill: '#8884d8' },
        { dataKey: 'compensatedEnergyGdIKwh', name: 'Energia Compensada kWh', fill: '#82ca9d' },
    ];

    const secondChartInformations = [
        { dataKey: 'totalEnergyValue', name: 'Valor Total sem GD R$', fill: '#8884d8' },
        { dataKey: 'compensatedEnergyGdIValue', name: 'Economia GD R$', fill: '#82ca9d' },
    ];

    return (
        <>
            <S.Container>
                <h2>Visualize o histórico das faturas</h2>
                <select onChange={(e) => setSelectedCustomerId(e.target.value)}>
                    <option value={""}>Selecione um cliente</option>
                    {
                        Array.from(customerList).map(customer => (
                            <option key={customer} value={customer}>{customer}</option>
                        ))
                    }
                </select>
                <CustomChart data={sortedInvoiceList} bars={firstChartInformations} />
                <CustomChart data={sortedInvoiceList} bars={secondChartInformations} />
            </S.Container>
        </>
    );

}
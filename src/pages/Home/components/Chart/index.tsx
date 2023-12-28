import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import * as S from './styles'

type ChartProps = {
    data?: unknown[],
    bars: {
        dataKey: string,
        name: string,
        fill: string
    }[]
}

export const CustomChart = ({ data, bars }: ChartProps) => {
    return (
        <S.StyledResponsiveContainer aspect={2}>
            <BarChart 
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="referenceMonth" />
                <YAxis />
                <Tooltip />
                <Legend />
                {bars.map((bar, index) => (
                    <Bar key={index} dataKey={bar.dataKey} name={bar.name} fill={bar.fill} />
                ))}
            </BarChart>
        </S.StyledResponsiveContainer>
          
    )
}
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { CustomChart } from './index';

describe('CustomChart Component', () => {
    it('should render the chart with the correct data and bars', () => {
        const data = [
            { referenceMonth: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
            { referenceMonth: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
        ];

        const bars = [
            { dataKey: 'uv', name: 'UV', fill: '#8884d8' },
            { dataKey: 'pv', name: 'PV', fill: '#82ca9d' },
        ];

        render(<CustomChart data={data} bars={bars} />);

    });

});
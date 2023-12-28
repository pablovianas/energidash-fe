import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Header } from './index';

describe('Header Component', () => {
    it('should render the header with the correct text', () => {
        render(<Header />);
        
        const headerElement = screen.getByText(/Dashboard/i);
        expect(headerElement).toBeInTheDocument();

        const homeLinkElement = screen.getByText(/Início/i);
        expect(homeLinkElement).toBeInTheDocument();

        const downloadLinkElement = screen.getByText(/Faça download das faturas/i);
        expect(downloadLinkElement).toBeInTheDocument();
    });
})
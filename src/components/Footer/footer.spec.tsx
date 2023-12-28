import { render, screen } from '@testing-library/react';
import { it, describe, expect} from 'vitest';
import { Footer } from './index';

describe('Footer Component', () => {
    it('should render the footer with the correct text', () => {
        render(<Footer />);
        const footerElement = screen.getByText(/Desenvolvido por Pablo/i);
        expect(footerElement).toBeInTheDocument();
    });
});
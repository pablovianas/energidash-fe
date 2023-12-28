
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import ResizeObserver from 'resize-observer-polyfill';
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';

window.ResizeObserver = ResizeObserver

afterEach(() => {
    cleanup();
});

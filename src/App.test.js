import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Application render withou crashing', () => {
    render(<App />);
});

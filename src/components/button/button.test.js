import React from 'react';
import Button from '@components/button'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

let button
const func = jest.fn().mockReturnValue('clicked')


describe('Button test suite', () => {

    test('Render without crashing', () => {
        render(<Button label="Test" onClick={func} />)
        button = screen.getByText('Test')
        expect(button).toBeInTheDocument()
    });

    test('Can execute onClick function', () => {
        render(<Button label="Test" onClick={func} />)
        userEvent.click(screen.getByText('Test'))
        expect(func).toHaveBeenCalled()
    });
});


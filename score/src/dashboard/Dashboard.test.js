import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard.js';
import Display from '../display/Display.js';

describe('<Dashboard />', () => {
    it('if strike count is less than 3 it should increment the count on click', () => {
        const { getByText } = render(<Dashboard />);
       
        const strikeButton = getByText(/strike/i);

        fireEvent.click(strikeButton);

        const count = render(<Display strikes={props.strikes} />).getByText(/Strikes: 1/i)
        expect(count).toBeInTheDocument();
    })
})
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display.js';

describe('<Display />', () => {
    it('should render strikes and balls for the at-bat', () => {
        const { getByText } = render(<Display />);

        expect(getByText(/strikes/i)).toBeInTheDocument();
        expect(getByText(/balls/i)).toBeInTheDocument();
    });
});
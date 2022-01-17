import React from 'react';
import { screen, render } from '@testing-library/react';
import { DemoModal } from '..';

describe("Modal Window", () => {
    it("renders component", () => {
        render(<DemoModal onClose={jest.fn()} isLogin={true} />);
        expect(screen.getByTestId('modal_window')).toBeTruthy();
    })
})
import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {
  test('should render same text passed into title prop - get by text', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// test('should render same text passed into title prop - get by role', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole('heading', { name: 'My Header' });
//   expect(headingElement).toBeInTheDocument();
// });

// test('should render same text passed into title prop - get by title', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle('Header');
//   expect(headingElement).toBeInTheDocument();
// });

// test('should render same text passed into title prop - get by test id', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTestId('header-1');
//   expect(headingElement).toBeInTheDocument();
// });

// // +++++++++ FIND BY +++++++++

// test('should render same text passed into title prop - find by text', async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// // +++++++++ QUERY BY +++++++++

// test('should render same text passed into title prop - query by text', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// test('should render same text passed into title prop - get all by role', () => {
//   render(<Header title="My Header" />);
//   const headingElements = screen.queryAllByRole('heading');
//   expect(headingElements.length).toBe(2);
// });

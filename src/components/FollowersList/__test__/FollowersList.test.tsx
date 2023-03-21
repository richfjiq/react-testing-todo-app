import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import FollowersList from '../FollowersList';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('FollowersList', () => {
  beforeEach(() => {
    console.log('RUNNING BEFORE EACH TEST');
  });

  beforeAll(() => {
    console.log('Running once before all tests!!!');
  });

  afterEach(() => {
    console.log('RUNNING AFTER TEST');
  });

  afterAll(() => {
    console.log('RUNNING ONCE AFTER ALL TESTS');
  });

  test('should render follower items', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    expect(followerDivElement).toBeInTheDocument();
  });

  test('should render follower items - COPY', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    expect(followerDivElement).toBeInTheDocument();
  });

  // test('should render multiple follower items', async () => {
  //   render(<MockFollowersList />);
  //   const followerDivElement = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerDivElement.length).toBe(5);
  // });
});

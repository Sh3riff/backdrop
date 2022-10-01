import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';
import BackdropApp from '../App';

describe('Backdrop App test', () => {
  test('App Launch', async () => {
    await render(<BackdropApp />);
    const HeaderText = await screen.getByText('All Cats');

    expect(HeaderText).toBeDefined();
  });

  test('Expect to render The initial cat list (10 cats)', async () => {
    render(<BackdropApp />);
    const CatItems = await waitFor(() => screen.getAllByTestId('CatListItem'));
    // const CatItems = await screen.getAllByTestId('CatListItem');

    expect(CatItems).toHaveLength(10);
  });

  test('Expect to render more cats on scroll', async () => {
    render(<BackdropApp />);
    await screen.getAllByTestId('CatListItem');
    await screen.getByTestId('AllCatsList');

    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 500,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 500,
          width: 100,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      },
    };

    fireEvent.scroll(screen.getByTestId('AllCatsList'), eventData);

    const CatItems = await screen.getAllByTestId('CatListItem');
    expect(CatItems).toHaveLength(16);
  });
});

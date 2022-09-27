import React from 'react';
import {render, screen, waitFor} from '@testing-library/react-native';
import BackdropApp from '../App';

test('cat screen renders properly', async () => {
  render(<BackdropApp />);
  await waitFor(() => expect(screen.queryByTestId('CatListItem')).toBeTruthy);
});

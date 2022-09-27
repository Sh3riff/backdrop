// import React from 'react';
// import {render, screen, fireEvent} from '@testing-library/react-native';

// import App from '../App';

// describe('Testing App navigation', () => {
//   test('page contains the header and 10 items', async () => {
//     render(<App />);

//     const AllCatScreen = await screen.findByText('All Cats');

//     expect(AllCatScreen).toBeTruthy();
//   });

//   test('clicking on the button takes you to the notifications screen', async () => {
//     render(<App />);
//     const AllCatScreen = await screen.findByText('All Cats');
//     const CatsILikeNavButton = await screen.findByText('Cats I like');

//     expect(AllCatScreen).toBeTruthy();

//     fireEvent(CatsILikeNavButton, 'press');
//     const CatsILikeScreen = await screen.findByText('Cats I Like');

//     expect(CatsILikeScreen).toBeTruthy();
//   });
// });

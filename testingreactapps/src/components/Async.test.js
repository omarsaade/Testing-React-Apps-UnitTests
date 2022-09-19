import { render, screen } from '@testing-library/react';
import Async from './Async'


//replace fetch fn by mock fn
describe('Async Component', () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        // it allows us to set a value, this fetch function should resolve
        // to when it's being called. And it should resolve to something
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }],
        });
        render(<Async />)
        //findAllByRole return a promise
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});


// import { render, screen } from '@testing-library/react';
// import Async from './Async'

// describe('Async Componnet', () => {
//     test('renders posts if request succeeds', async () => {
//         render(<Async />)
//         //findAllByRole return a promise
//         const listItemElements = await screen.findAllByRole('listitem');
//         expect(listItemElements).not.toHaveLength(0);
//     });
// });
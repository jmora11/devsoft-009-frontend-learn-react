import '@testing-library/jest-dom';
import { gifFetch } from '../../helpers/getGifs';

describe('get Gifs', () => {

    test('debe traer 10 elementos', async() => {
        const gifs = await gifFetch('Demon Slayer');
        expect( gifs.length ).toBe(10);
    });

    test('debe tener 0 elementos', async() => {
        const gifs = await gifFetch('');
        expect( gifs.length ).toBe(0);
    });
});

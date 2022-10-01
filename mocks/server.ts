import {setupServer} from 'msw/node';
import {rest} from 'msw';
import {data1, data2, favs} from './mockData';

const handlers = [
  rest.get('https://api.thecatapi.com/v1/images/search', (req, res, ctx) => {
    const page = req.url.searchParams.get('page');
    const data = page === '0' ? data1 : data2;
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get('https://api.thecatapi.com/v1/favourites', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(favs));
  }),

  rest.post(
    'https://api.thecatapi.com/v1/favourites',
    async (req, res, ctx) => {
      const {image_id} = await req.json();

      const thisCat: any = data1.find(cat => cat.id === image_id);

      const newFav: any = {
        id: 100,
        image_id: thisCat?.id || '',
        image: {
          id: thisCat?.id || '',
          url: thisCat?.url || '',
        },
      };

      favs.push(newFav);
      return res(ctx.status(200), ctx.json({}));
    },
  ),

  rest.delete(
    'https://api.thecatapi.com/v1/favourites/:id',
    (req, res, ctx) => {
      const id = req.params.id as string;

      const newFav = favs.filter(fav => fav.id !== parseInt(id));
      return res(ctx.status(200), ctx.json(newFav));
    },
  ),
];

export const server = setupServer(...handlers);

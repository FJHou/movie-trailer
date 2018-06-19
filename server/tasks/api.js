const rp = require('request-promise-native');

async function fetchMoive (item) {
  const url = `http://api.douban.com/v2/movie/${item.doubanId}`;

  const res = await rp(url);

  return res;
}


;(async () => {
  let movies = [
    { doubanId: 26793157,
      title: '负重前行',
      rate: 6.9,
      poster: 'https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2518648419.jpg' },
    { doubanId: 26726261,
      title: '丛林',
      rate: 6.8,
      poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2498434192.jpg' },
  ]

  moives.map(async (movie) => {
    let data = fetchMoive(movie);

  })
})();
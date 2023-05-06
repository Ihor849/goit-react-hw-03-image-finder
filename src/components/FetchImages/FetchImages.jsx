import axios from 'axios';

export async function fetchImages(query, page) {
  console.log(query, page);
  const BASE_URL = `https://pixabay.com/api/`;
  const options = {
    key: '34377487-34dfc22cd0267d3510191dd51',
    image_type: 'photo',
    q: query,
    per_page: 12,
    page,
  };
  const images = await axios.get(
    `${BASE_URL}?key=${options.key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${options.per_page}&page=${page}`
  );

  return images.data;
}

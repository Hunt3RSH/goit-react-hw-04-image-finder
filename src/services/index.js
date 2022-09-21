function pixFetch(searchValue, PAGE = 1) {
  const BASIC_URL = `https://pixabay.com/api/`;
  const searchParam = new URLSearchParams({
    key: '23927157-d3ab9985a80634a3dcde5d8fa',
    q: `${searchValue}`,
    image_type: 'photo',
    orientation: 'horizontal',
    page: `${PAGE}`,
    per_page: 12,
  });

  return fetch(`${BASIC_URL}?${searchParam}`).then(response => response.json());
}

export default pixFetch;

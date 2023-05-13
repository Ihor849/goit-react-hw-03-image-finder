import React from 'react';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { AppImg, Wrapper } from './App.styled';
import { Container } from 'components/Container/Container';
import Searchbar from 'components/Searchbar/SearchbarHook';
import { fetchImages } from '../../FetchImages/FetchImages';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { ColorRingLoad } from 'components/Loader/Loader';
import { ButtonUpTop } from 'components/ButtonUpTop/ButtonUpTop';

export default function App() {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = query => {
    setQuery(query);
    setHits([]);
    setPage(1);
  };
  async function fetchGallery(query, page) {
    try {
      setStatus('pending');
      const { hits, totalHits } = await fetchImages(query, page);
      if (hits.length < 1) {
        setStatus('idle');
        setTotalHits(0);
      } else {
        setHits(prevState => [...prevState, ...hits]);
        setTotalHits(totalHits);
        setStatus('resolved');
      }
    } catch (error) {
      setStatus('rejected');
      setError(error);
    }
  }
  const onLoadMore = async () => {
    setPage(prevState => prevState + 1);
  };

  const onUpTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchGallery(query, page);
  }, [page, query]);

  if (status === 'idle') {
    return (
      <AppImg>
        <Container>
          <Searchbar onSubmit={handleSubmit} />
          {query && totalHits < 0 ? (
            Notiflix.Notify.info(' 🙄No results were found for your search')
          ) : (
            <ImageGallery images={hits} />
          )}
        </Container>
      </AppImg>
    );
  }
  if (status === 'pending') {
    return (
      <AppImg>
        <Container>
          <Searchbar onSubmit={handleSubmit} />
          <ImageGallery images={hits} />
          <ColorRingLoad />
        </Container>
      </AppImg>
    );
  }
  if (status === 'rejected') {
    return (
      <AppImg>
        <Container>
          <Searchbar onSubmit={handleSubmit} />
          <ImageGallery images={hits} />

          {Notiflix.Notify.failure(`${error.message}`)}
        </Container>
      </AppImg>
    );
  }
  if (status === 'resolved') {
    return (
      <AppImg>
        <Container>
          <Searchbar onSubmit={handleSubmit} />
          <ImageGallery images={hits} />
          {totalHits > 12 && totalHits > hits.length && (
            <Wrapper>
              <Button btnLoadMore={onLoadMore} />
              <ButtonUpTop onClick={onUpTop} />
            </Wrapper>
          )}
        </Container>
      </AppImg>
    );
  }
}

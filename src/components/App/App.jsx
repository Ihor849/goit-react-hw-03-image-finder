import React, { Component } from 'react';

import { AppImg } from './App.styled';
// import Notiflix from 'notiflix';
import { Container } from 'components/Container/Container';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchImages } from 'components/FetchImages/FetchImages';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { ColorRingLoad } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    items: [],
    status: 'idle',
    totalHits: 0,
    page: 1,
  };
  handleSubmit = async searchQuery => {
    const { page } = this.state;
    this.setState({ query: searchQuery, page: 1 });

    try {
      this.setState({ status: 'pending' });
      const { hits, totalHits } = await fetchImages(searchQuery, page);
      console.log(hits, totalHits);
      if (hits.length < 1) {
        this.setState({ status: 'idle', totalHits: 0 });
      } else {
        this.setState({
          items: hits,
          totalHits: totalHits,
          status: 'resolved',
        });
      }
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  };

  onLoadMore = async () => {
    const { query, page } = this.state;
    this.setState({ status: 'pending' });
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    try {
      const { hits } = await fetchImages(query, page + 1);

      this.setState(prevState => ({
        items: [...prevState.items, ...hits],
        status: 'resolved',
      }));

      console.log(hits);
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  };

  render() {
    // return (
    //   <AppImg>
    //     <Container>
    //       <Searchbar onSubmit={this.handleSubmit} />
    //       <ImageGallery images={this.state.items} />
    //       <Button btnLoadMore={this.onLoadMore} />
    //     </Container>
    //   </AppImg>
    // );

    const { totalHits, status, items, query } = this.state;
    if (status === 'idle') {
      return (
        <AppImg>
          <Container>
            <Searchbar onSubmit={this.handleSubmit} />
            {query && totalHits < 1 ? (
              <p>FFFFFFFFFFFFFFFFFF</p>
            ) : (
              <ImageGallery images={this.state.items} />
            )}
          </Container>
        </AppImg>
      );
    }
    if (status === 'pending') {
      return (
        <AppImg>
          <Container>
            <Searchbar onSubmit={this.handleSubmit} />
            <ImageGallery images={this.state.items} />
            <ColorRingLoad />
          </Container>
        </AppImg>
      );
    }
    if (status === 'regected') {
      return (
        <AppImg>
          <Container>
            <Searchbar onSubmit={this.handleSubmit} />
            <ImageGallery images={this.state.items} />
            <p>Something wrong, try later</p>
          </Container>
        </AppImg>
      );
    }
    if (status === 'resolved') {
      return (
        <AppImg>
          <Container>
            <Searchbar onSubmit={this.handleSubmit} />
            <ImageGallery images={this.state.items} />
            {totalHits > 12 && totalHits > items.length && (
              <Button btnLoadMore={this.onLoadMore} />
            )}
          </Container>
        </AppImg>
      );
    }
  }
}
export default App;

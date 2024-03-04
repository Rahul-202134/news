import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;

    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    fetchNews();
  });

  const handlePrevClick = async () => {
    setPage(page - 1);
    fetchNews();
  }
  const handleNextClick = async () => {
    setPage(page + 1);
    fetchNews();
  }
  const fetchMoreNews = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);

  };

  return (
    <div className="container text-center" style={{ marginTop: '100px' }}>
      <h1>Top News Of India</h1>
      {loading ? <Spinner /> : null}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreNews}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ''}
                description={element.description ? element.description : ''}
                imageurl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button type='submit' disabled={page <= 1} className='btn btn-dark' onClick={handlePrevClick}>&laquo; Previous</button>
          <button type='submit' className='btn btn-dark' onClick={handleNextClick}>Next&raquo;</button>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;

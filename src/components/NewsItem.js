import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageurl, newsUrl, author, date } = props;

  return (
    <div>
      <div className="card">
        <img
          src={
            !imageurl
              ? 'https://c.ndtvimg.com/2022-04/j8edfgio_zepto_625x300_19_April_22.jpg'
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? 'Unknown' : author} on{' '}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            className="btn btn-sm btn-primary btn-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

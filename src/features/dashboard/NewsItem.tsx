import * as React from 'react';

interface INewsItemProps {
    data?:any
}

const NewsItem: React.FunctionComponent<INewsItemProps> = ({data}) => {
    const {author, title, source, description, content, url, urlToImage} = data
    
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1em",
          maxWidth: "300px",
          margin: "1em 0px",
        }}
      >
        <img src={urlToImage} alt={"Image to News"}></img>
        <h2>
          {title} | {source?.name}
        </h2>
        <h5 dangerouslySetInnerHTML={{ __html: author }} />
        <p>{description}</p>
        <aside>
          <p>{content}</p>
          <a
            href={url}
            rel="noreferrer"
            title={"news-article"}
            target={"_blank"}
          >
            View Full Article
          </a>
        </aside>
      </div>
    );
};

export default NewsItem;

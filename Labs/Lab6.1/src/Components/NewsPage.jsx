import { newLists } from "./data/News_Data.jsx";
import "../assets/NewsPage.scss";

const NewsPage = () => {
  return (
    <div className="news-container">
      <h2>News Category</h2>
      {newLists.map((newsItem) => (
        <div key={newsItem.id} className="news-item">
          <img src={newsItem.images} alt={newsItem.title} />
          <h2>{newsItem.title}</h2>
          <p>{newsItem.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;

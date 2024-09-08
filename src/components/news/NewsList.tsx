import News from "./News.tsx";

/**
 * Компонент Список Новостей
 */
function NewsList() {
  return (
    <div className="news-list">
      <News>Новость 1</News>
      <News>Новость 2</News>
      <News>Новость 3</News>
    </div>
  );
}

export default NewsList;
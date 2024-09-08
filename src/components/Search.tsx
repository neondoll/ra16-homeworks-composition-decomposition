/**
 * Компонент Поисковая строка
 */
function Search() {
  return (
    <form className="search">
      <input className="search__input" />
      <button className="search__btn" type="submit">Найти</button>
    </form>
  );
}

export default Search;

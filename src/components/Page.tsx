import NewsList from './news/NewsList.tsx';
import Promo from "./Promo.tsx";
import Search from './Search.tsx';
import Widgets from "./widgets/Widgets.tsx";

function Page() {
  return (
    <div className="page">
      <NewsList />
      <Search />
      <Promo
        alt=""
        src="https://ifish2.ru/wp-content/uploads/skolko-mojno-zarabotat-na-sajt9.jpg"
      />
      <Widgets />
    </div>
  )
}

export default Page;

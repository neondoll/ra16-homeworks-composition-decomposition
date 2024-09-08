import Widget from "./Widget.tsx";

/**
 * Компонент Список Виджетов
 */
function Widgets() {
  return (
    <div className="widgets">
      <Widget title="Название виджета 1">
        <div>Содержание виджета 1</div>
      </Widget>
      <Widget title="Название виджета 2">
        <div>Содержание виджета 2</div>
      </Widget>
      <Widget title="Название виджета 3">
        <div>Содержание виджета 3</div>
      </Widget>
    </div>
  );
}

export default Widgets;

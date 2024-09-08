import { PropsWithChildren } from "react";

/**
 * Компонент Виджет
 */
function Widget({ children, title }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="widget">
      <h6 className="widget__title">{title}</h6>
      {children}
    </div>
  );
}

export default Widget;

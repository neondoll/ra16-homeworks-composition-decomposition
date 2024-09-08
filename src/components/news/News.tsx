import { PropsWithChildren } from "react";

/**
 * Компонент Новость
 */
function News({ children }: PropsWithChildren) {
  return <div className="news">{children}</div>;
}

export default News;
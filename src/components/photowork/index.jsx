import { Picture } from "../../img/work";
import "./index.scss";

export const PhotoWork = () => {
  return (
    <div className="part">
      <div className="content-mixin">
        <div className="line" />
        <h2 className="title">Фото выполненных работ</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="work">
        {Array.from({ length: 8 }).map((_, index) => (
          <Picture choice={index + 1} key={index + 1} />
        // <>{index+1}</>
        ))}
      </div>
    </div>
  );
};

import { SvgComponent } from "../../svg";
import pipe from "../../img/pipe.png";
import "./index.scss";

export const Description = () => {
  const text = [
    "Доступные цены",
    "Собственное производство  Дымоходов",
    "Выполнение необходимых работ, связанных с установкой камина, печи, котла",
    "Гарантия (от трёх до десяти лет)",
    "Работаем чисто, аккуратно, убираем за собой, не сквернословим",
    "Только русские квалифицированные специалисты",
    "Устанавливаем любые дымоходы всех производителей",
  ];

  return (
    <>
      <hr className="description__hr-menu" />
      <div className="description">
        <h1 className="description__title">Монтаж дымоходов</h1>

        <hr className="description__hr" />
        <ul className="description__list">
          <li className="description__item">
            Главная <span className="description__mark"></span>
          </li>
          <li className="description__item description__item--blue">
            Монтаж дымоходов
          </li>
        </ul>

        <hr className="description__hr" />
        <p className="description__text">
          В
          <span className="description__text description__text--red">
            Дымоход.ру
          </span>
          вам помогут как приобрести, так и установить дымоход любой
          конфигурации. В нашем монтажном отделе, состоящим из трёх бригад
          работают квалифицированные специалисты, которые ежегодно проходят
          курсы повышения квалификации. Все работы проводим качественно и
          аккуратно, в короткий срок и на совесть .
        </p>

        <div className="description__containter">
          <div className="description__block">
            <h2 className="description__paragraph">
              Lorem ipsum dolor sit amet
              <br />
              <span className="description__paragraph--red">LOREM IPSUM</span>
            </h2>

            <ul className="description__list-work">
              {text.map((item, index) => (
                <li className="description__item-work" key={index}>
                  <span className="description__span-work">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="description__block description__block-pipe">
            <div className="description__triangle-1">
              <SvgComponent word="vectorB" />
              <SvgComponent word="vectorY" />
              <SvgComponent word="vectorB" />
            </div>
            <div className="description__background">
              <SvgComponent word="blob-2" />
            </div>
            <div className="description__point-1">
              <SvgComponent word="group" />
            </div>
            <img className="description__photo" src={pipe} alt="pipe" />
            <div className="description__point-2">
              <SvgComponent word="group" />
            </div>
            <div className="description__triangle-2">
              <SvgComponent word="vectorB" />
              <SvgComponent word="vectorY" />
              <SvgComponent word="vectorB" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

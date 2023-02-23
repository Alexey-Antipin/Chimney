import { SvgComponent } from "../../svg";
import "./index.scss";

export const Footer: React.FC = () => {
  const catalog = ["Дымоходы", "Дымососы", "Печи для дома", "Печи для бани"];
  const catalogRight = ["Камины", "Силикат кальция", "Котлы", "Ещё"];
  const information = [
    "Каталог",
    "Установка и монтаж",
    "Отзывы",
    "Ликвидация товара",
  ];
  const informationRight = ["Полезное", "Контакты", "Оплата и доставка"];
  const massiveSVG = [
    { svg: "vk", link: "https://vk.com/" },
    { svg: "telegram", link: "https://web.telegram.org/" },
    { svg: "instagram", link: "https://www.instagram.com/" },
    { svg: "whatsapp", link: "https://web.whatsapp.com/" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__block">
          <h2 className="footer__title">КАТАЛОГ</h2>
          <ul className="footer__list">
            <ul className="footer__parts">
              {catalog.map((item, index) => (
                <li className="footer__item" key={index}>
                  {item}
                </li>
              ))}
            </ul>

            <ul className="footer__parts">
              {catalogRight.map((item, index) => (
                <li className="footer__item" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </ul>
        </div>

        <div className="footer__block">
          <h2 className="footer__title">ИНФОРМАЦИЯ</h2>

          <ul className="footer__list">
            <ul className="footer__parts">
              {information.map((item, index) => (
                <li className="footer__item" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="footer__parts">
              {informationRight.map((item, index) => (
                <li className="footer__item" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </ul>
        </div>

        <div className="footer__block">
          <h2 className="footer__title">ВРЕМЯ РАБОТЫ</h2>
          <div className="footer__work">
            <SvgComponent word="wall-clock" />

            <time className="footer__time">
              <span className="footer__days">пн-пт </span>
              <span>9:00 – 20:00 </span>
              <span className="footer__days">сб-вс </span>
              <span>10:00 – 18:00</span>
            </time>
          </div>

          <div className="footer__work">
            <SvgComponent word="placeholder" />

            <address className="footer__address">
              г. Санкт - Петербург, ул. Тамбасова д.7
            </address>
          </div>

          <div className="footer__net">
            {massiveSVG.map((item, index) => (
              <a className="footer__network" href={item.link} key={index}>
                <SvgComponent word={item.svg} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__net footer__net-for-tel">
          {massiveSVG.map((item, index) => (
            <a className="footer__net-link" href={item.link} key={index}>
              <SvgComponent word={item.svg} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

import logo from "../../img/logo.png";
import { SvgComponent } from "../../svg";
import "./index.scss";

export const Header:React.FC = () => {
  const massiveItem = [
    "Каталог товаров",
    "доставка и оплата",
    "Цены",
    "Контакты",
  ];

  const massiveSVG = [
    { svg: "vk", link: "https://vk.com/" },
    { svg: "telegram", link: "https://web.telegram.org/" },
    { svg: "instagram", link: "https://www.instagram.com/" },
    { svg: "whatsapp", link: "https://web.whatsapp.com/" },
  ];

  const massiveButtonSVG = [
    { svg: "search", cls: "header__menu-for-telmini" },
    { svg: "like", cls: "header__menu-for-telmini" },
    { svg: "cart", cls: "" },
    { svg: "burgermenu", cls: "header__menu-for-tel" },
  ];

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />

      <div className="header__menu-for-notbook">
        <SvgComponent word="burgermenu" />
      </div>

      <ul className="header__list">
        {massiveItem.map((item, index) => (
          <li className="header__item" key={index}>
            {item}
          </li>
        ))}
      </ul>

      <div>
        <a className="header__telefon" href="tel:+78125092198">
          <span className="header__tel">+7 (812) </span>
          <span className="header__tel-after">509 21 98</span>
        </a>
      </div>

      <div className="header__call">перезвоните мне</div>

      <div className="header__net">
        {massiveSVG.map((item, index) => (
          <a className="header__network" href={item.link} key={index}>
            <SvgComponent word={item.svg}/>
          </a>
        ))}
      </div>

      <div className="header__score-block">
        {massiveButtonSVG.map((item, index) => (
          <button className={`header__score ${item.cls}`} key={index}>
            <SvgComponent word={item.svg} />
          </button>
        ))}
      </div>
    </header>
  );
};

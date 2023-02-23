import { SvgComponent } from "../../svg";
import { useState } from "react";
import "./index.scss";

export const Form = () => {
  const [telefon, setTelefon] = useState("");
  const [name, setName] = useState("");

  const massiveSVG = [
    { svg: "vk", link: "https://vk.com/" },
    { svg: "telegram", link: "https://web.telegram.org/" },
    { svg: "instagram", link: "https://www.instagram.com/" },
    { svg: "whatsapp", link: "https://web.whatsapp.com/" },
  ];

  const handleSubmit = async (event) => {
    await event.preventDefault();

    if ((name && telefon) !== "") {
      alert("Отправлено.");
    }
  };

  return (
    <div className="part">
      <div className="content-mixin">
        <div className="line"></div>
        <h2 className="title">Почему Дымоход.ру?</h2>
        <p className="text">
          В отличие от других производителей, мы ручаемся за качество продукции,
          т.к. все Дымоходы изготавливаются из качественной стали, проверенного
          теплоизолятора, по современной технологии плазменной сварки «встык»
        </p>
      </div>

      <ul className="form__description">
        <li className="form__item">
          <SvgComponent word="guarantee" />
          <h2 className="form__title">Большой гарантийный срок</h2>
          <p className="form__text">
            Крепёж, стыковка элементов –
            <span className="form__text--red">10 лет</span>
            <br />
            Сквозная коррозия труб –
            <span className="form__text--red">5 лет</span>
            <br />
            Гидроизоляция –<span className="form__text--red">3 года</span>
          </p>
        </li>
        <li className="form__item">
          <SvgComponent word="architect" />
          <h2 className="form__title">Помощь в покупке агрегата</h2>
          <p className="form__text">
            (печи, камина, котла), а также качественной установке на объекте с
            последующим
            <br />
            гарантийным сервисом
          </p>
        </li>
        <li className="form__item">
          <SvgComponent word="review" />
          <h2 className="form__title">Реальные отзывы клиентов</h2>
          <p className="form__text">
            Убедитесь в добросовестности исполнения, прочитав Отзывы клиентов в
            специальном разделе.
          </p>
        </li>
      </ul>

      <h2 className="form__consultation">необходима консультация?</h2>
      <span className="form__net-text">
        оставьте заявку или свяжитесь с нами в социальных сетях
      </span>

      <div className="form__networks">
        {massiveSVG.map((item, index) => (
          <a className="form__network" href={item.link} key={index}>
            <SvgComponent word={item.svg} colour={"#EA6628"} />
          </a>
        ))}
      </div>

      <hr className="form__networks-hr" />

      <form className="form__send" id="send" method="POST">
        <div className="form__wrapper">
          <p className="form__send-text">
            Для
            <span className="form__send-text--orange">консультации</span>
            заполните форму!
          </p>
          <p className="form__send-undertext">
            С Вами свяжутся в ближайшее время
          </p>
          <div className="form__submit">
            <input
              className="form__input"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               имя"
              name="name"
            />
            <input
              className="form__input"
              type="text"
              onChange={(e) => setTelefon(e.target.value)}
              placeholder="Ваш                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      телефон"
              name="tel"
            />
            <button
              className="form__button"
              type="submit"
              onClick={(event) => handleSubmit(event)}>
              отправить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

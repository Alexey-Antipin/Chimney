import "./index.scss";

export const Mounting:React.FC = () => {
  const massive = [
    "Рассчёт предварительной заявки",
    "Замер объекта нашим инженером",
    "Составление Коммерческого предложения по изделиям дымохода и окончательной сметы на  работы ",
    "Изготовление Дымохода, покраска (если требуется)",
    "Монтаж продукции, проверка и наладкапробный запуск системы и последующая эксплуатация",
    "Гарантийное обслуживание по соответствующем сроку",
  ];

  return (
    <div className="part">
      <div className="content-mixin">
        <div className="line"></div>
        <h2 className="title">Процесс выполнения монтажа</h2>
        <p className="text"></p>
      </div>

      <ul className="mounting">
        {massive.map((item, index) => (
          <li className="mounting__item" key={index}>
            <span className="mounting__number">{index + 1}</span>
            <p className="mounting__text">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

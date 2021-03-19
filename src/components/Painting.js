import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default.jpg";

const Painting = ({ url, title, price, profileUrl, tag, quantity }) => (
  <>
    <img src={url} alt={title} width={480}></img>
    <h2>{title}</h2>
    <p>
      Автор: <a href={profileUrl}>{tag}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: {quantity < 10 ? "Заканчивается" : "Есть в наличии"}</p>
    <button type="button">Добавить в корзину</button>
  </>
);

Painting.defaultProps = {
  url: defaultImage,
};

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;

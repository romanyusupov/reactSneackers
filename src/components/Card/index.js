import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
    const onClickPlus = () => {
      alert(props.name)
    }
  
    return (
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/img/heart-unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src={props.imgUrl} alt="Sneakers" />
        <h5>{props.name}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{props.price} руб.</b>
          </div>
          <button className="button" onClick={onClickPlus}>
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
    );
  }
  
export default Card;
  
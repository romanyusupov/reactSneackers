import React from 'react';
import styles from './Card.module.scss';

function Card({onFavorite, onPlus, imgUrl, name, price }) {
    const [isAdded, setIsAdded] = React.useState(false);
    
    const onClickPlus = () => {
        onPlus({imgUrl, name, price});
        setIsAdded(!isAdded);
    }

    return (
      <div className={styles.card}>
        <div className={styles.favorite} onClick={onFavorite}>
          <img src="/img/heart-unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src={imgUrl} alt="Sneakers" />
        <h5>{name}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
          <img className={styles.plus} 
               onClick={onClickPlus}
               src={isAdded ? 'img/btn-checked.svg' : 'img/btn-plus.svg'} 
               alt="Plus"

            />
        </div>
      </div>
    );
  }
  
export default Card;
  
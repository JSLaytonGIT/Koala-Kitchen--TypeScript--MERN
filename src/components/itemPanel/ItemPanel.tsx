import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import './ItemPanel.scss';

interface panelItemObject {
    src: string;
    foodName: string;
    price: string;
}

const Panel = (props: {item: panelItemObject}) => {
    const [showAddToCart, setShowAddToCart] = useState(false);
    const [itemCount, setItemCount] = useState(1);

    const handleAddClick = () => {
        setItemCount(itemCount + 1);
    };

    const handleMinusClick = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1);
        }
    };

    return (
        <div className="item-panel">
            <img src={props.item.src} alt={props.item.foodName} className="panel-image" />
            <h4>{props.item.foodName}</h4>
            <h4>£{props.item.price}</h4>
            <div className="cart-icon" onClick={() => setShowAddToCart(true)}>
                <FontAwesomeIcon icon={faPlusCircle} color='#845AAE' style={{ fontSize: '1.4vw' }} />
            </div>

            {showAddToCart && (
                <div className="cart-buttons">
                    <FontAwesomeIcon icon={faMinusCircle} color='#845AAE' style={{ fontSize: '1.4vw' }} onClick={handleMinusClick} />
                    <span className='count'>{itemCount}</span>
                    <FontAwesomeIcon icon={faPlusCircle} color='#845AAE' style={{ fontSize: '1.4vw' }} onClick={handleAddClick} />
                    <button className='add-to-cart-button'>+ CART</button>
                </div>
            )}
        </div>
    )
}

export default Panel;
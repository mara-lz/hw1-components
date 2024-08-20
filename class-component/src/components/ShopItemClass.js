import {Component} from 'react';

export default class ShopItemClass extends Component {
    render() {
        const item = this.props.item;
        const getPrice = () => {
            return item.currency + item.price.toFixed(2);
        };
        return (
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">
                    {item.descriptionFull}
                </div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"/>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{getPrice()}</div>
                    <button>Add to cart</button>
                </div>
            </div>
        )
    }
}
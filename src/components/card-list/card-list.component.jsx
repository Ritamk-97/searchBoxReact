// import { Component } from "react";
// const { Component } = require('react');
import Card from './../card/card.component';
import './card-list.styles.css';

const CardList = ({monsters}) => {
    return (
    <div className='card-list'> 
        {monsters.map((monster) => {
            return <Card monster={monster}/>;
            })
        }
    </div>
)};

// export class CardList extends Component {
//     render() {
//         const { monsters } = this.props;

//         return (
//             <div className='card-list'> 
//                 {monsters.map((monster) => {
//                     return (
//                         <Card monster={monster}/>
//                     );
//                     })
//                 }
//             </div>
//         )
//     }
// }

export default CardList;
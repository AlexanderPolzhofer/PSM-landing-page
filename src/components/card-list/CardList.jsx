import Card from "../card-component/Card";

const CardList = ({ cardList }) => {

    return (<div>
        {cardList.map(listItem =>
            <Card
                key={listItem.id}
                listItem={listItem}
            />)}
    </div>)
}

export default CardList;
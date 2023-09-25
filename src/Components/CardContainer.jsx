import useLoadData from "../Hooks/useLoadData";
import Card from "./Card";

const CardContainer = () => {
    const data = useLoadData()
    // console.log(data);
    return (
        <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                data.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default CardContainer;
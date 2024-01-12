import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import Contador from "../Contador/Contador";

const ItemCard = ({ item }) => {
  let Ars = new Intl.NumberFormat('en-US', {style: 'currency',currency: 'ARS'})

  return (
    <div className="flex flex-col my-4 items-center gap-5 mt-5 ml-5 hover:shadow-xl hover:shadow-current ">
      <div>
        <img className="card_img" src={item.img} alt={item.name} />
      </div>

      <div className="flex flex-col bg-red-200 w-full items-center rounded-b-lg">
        <div className="text-center text-lg" >{item.name}</div>
        <div>{Ars.format(item.price)}</div>

        <Contador
          hasta={item.stock}
          className={
            "bg-red-500 rounded items-center py-2 px-4 text-stone-50 flex font-semibold my-4"
          }
        />
         <Button size="small" color="primary">
            <Link className='text-red-500' to={`/item/${item.id}` }>Ver producto</Link>
            {/* <Link to={`/item/${item.id}`}>Ver más</Link> */}
          </Button>
      </div>
    </div>
  );
};
export default ItemCard;

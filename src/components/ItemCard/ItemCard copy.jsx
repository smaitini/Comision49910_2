import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import Contador from "../Contador/Contador";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ Width: 345 }}>
      <div>
        <img className="card_img" src={item.img} alt={item.name} />
      </div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {item.price}
        </Typography>
      </CardContent>
      <div className="flex flex-col items-center">
        <Contador
          hasta={item.stock}
          className={
            "bg-red-500 rounded items-center py-2 px-4 text-stone-50 flex font-semibold my-4"
          }
        />

        <CardActions>
          <Button size="small" color="primary">
            <Link className='text-red-500' to={`/item/${item.id}` }>Ver producto</Link>
            {/* <Link to={`/item/${item.id}`}>Ver más</Link> */}
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
export default ItemCard;

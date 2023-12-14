// const ItemCard = ({item}) => {

//   return (
//     <article className="w-80">
//       <img className="card_img" src={item.img} alt={item.name} />
//       <h3 className="text-2xl font-semibold ">{item.name}</h3>
//       <hr />
//       <p>{item.description}</p>
//       <p className="text-xl font-bold">Precio: ${item.price}</p>

//       {/* <Boton>Ver más</Boton> */}
//     </article>
//   );
// };

// export default ItemCard;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ Width: 345 }}>
      <CardActionArea>
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
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver producto
        </Button>
      </CardActions>
    </Card>
  );
};
export default ItemCard;

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({
  productId,
  brand,
  model,
  category,
  subcategory,
  decription,
  specifications,
  images,
  afterDelete,
}) => {
  return (
    <Card>
      <CardActionArea component={Link} to={"/product/" + productId}>
        <CardMedia component="img" height="200px" image={images[0]} />
        <CardContent>
          <Typography color="text.primary">{brand + " " + model}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>Detalhes</Button>
        <Button>Compartilhar</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

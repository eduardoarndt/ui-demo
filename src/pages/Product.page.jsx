import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../api/product";
import PageContainer from "../components/PageContainer.component";
import { UserContext } from "../contexts/user.context";

const Product = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const { id: productId } = useParams();

  const loadProduct = async () => {
    const product = await getProduct(productId);
    setProduct(product);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <PageContainer>
      <p>{JSON.stringify(product, null, 2)}</p>
      <p>reviews aqui em baixo</p>
    </PageContainer>
  );
};

export default Product;

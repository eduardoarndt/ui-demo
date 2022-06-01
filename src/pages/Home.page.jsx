import { useContext, useEffect, useState } from "react";
import request, { gql } from "graphql-request";
import PageContainer from "../components/PageContainer.component";
import { UserContext } from "../contexts/user.context";
import { GRAPHQL_ENDPOINT } from "../realm/constants";
import ExpenseCard from "../components/ExpenseCard.component";
import { API_URL } from "../env/env";
import axios from "axios";
import ProductCard from "../components/ProductCard.component";
import { getAllProducts } from "../api/product";

const Home = () => {
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const products = await getAllProducts();
      setProducts((_) =>
        products.map((product) => ({
          ...product,
          key: product.productId,
        }))
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <PageContainer>
      <h1>PRODUTOS</h1>
      {products.map((product) => (
        <div>
          <ProductCard {...product} />
          <br />
        </div>
      ))}
    </PageContainer>
  );
};

export default Home;

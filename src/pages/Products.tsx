import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispath, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import {
  actGetProductsByCatPrefix,
  productscleanUp,
} from "@store/Products/productsSlice";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispath();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productscleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};
export default Products;

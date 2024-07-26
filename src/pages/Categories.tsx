import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { Category } from "@components/eCommerce";
import { useAppDispath, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/Categries/categoriesSlice";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";
const Categories = () => {
  const dispatch = useAppDispath();

  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};
export default Categories;

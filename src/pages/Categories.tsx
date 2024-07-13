import { Container , Row , Col } from "react-bootstrap";
import { useEffect } from "react";
import { Category } from "@components/eCommerce";
import { useAppDispath , useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/Categries/categoriesSlice";
const Categories = () =>{
  const dispatch = useAppDispath();

  const {loading , error , records} = useAppSelector((state) => state.categories
);

  useEffect(()=>{
    if(!records.length){
      dispatch(actGetCategories());
    }
    
  },[dispatch,records]);

  const categoriesList =
  records.length > 0 ? records.map(record => (
    <Col xs={6} md={3} key={record.id} className="d-flex justify-content-center mb-5 mt-2">
            <Category {...record} />
          </Col>
    )) 
  
  : "No categories found";






    return(
        <Container>
        <Row>
          {categoriesList}
          
          
        </Row>
      </Container>

    

    );
}
export default Categories;
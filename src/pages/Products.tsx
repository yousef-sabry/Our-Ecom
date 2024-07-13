import { Container , Row , Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispath, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix , productscleanUp } from "@store/Products/productsSlice";
import { useParams } from "react-router-dom";
const Products = () =>{
  const params = useParams();
  const dispatch = useAppDispath();
  const {loading , error , records} = useAppSelector(state => state.products)

  
  useEffect(()=>{
    
    dispatch(actGetProductsByCatPrefix(params.prefix as string))
    
    return () =>{
      dispatch(productscleanUp());
    }
  },[dispatch , params])


  const productsList =
  records.length > 0 ? records.map(record => (
    <Col xs={6} md={3} key={record.id} className="d-flex justify-content-center mb-5 mt-2">
            <Product {...record} />
          </Col>
    )) 
  
  : "No categories found";


    return(
      <Container>
      <Row>
        {productsList}
        
        
      </Row>
    </Container>



        

    );
}
export default Products;
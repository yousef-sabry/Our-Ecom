
import styled from 'styled-components';
import { FaTwitter, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Styled components
const Promo = styled.div`
  background-color: #f9f9f9;
  border-radius: 25px;
  padding: 20px;
`;

const PromoTitle = styled.h1`
  font-size: 2.25rem;
  color: #0dcaf0;
  margin: 0;
`;

const PromoDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

const PromoPhone = styled.p`
  font-size: 1rem;
  color: #333;
`;

const PromoImage = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 25px;
  }
`;

const PromoFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PromoSocialLink = styled.a`
  font-size: 1.5rem;
  color: #333;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    color: #0dcaf0;
  }
`;

const Home = () => {
  return (
    <Promo>
      <Container>
        <Row className="text-center">
          <Col md={6} className="d-flex flex-column justify-content-center">
            <PromoTitle>START SHOPPING NOW</PromoTitle>
            <PromoDescription>"Discover your unique style with our curated collection of fashion essentials and timeless classics, designed to make every moment memorable."</PromoDescription>
            <Button variant="primary" className="my-2">READ MORE</Button>
            <PromoPhone>307-856-2946</PromoPhone>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <PromoImage>
              <img src="https://img.freepik.com/free-photo/young-client-holding-shopping-bags-coffee_23-2148674288.jpg?t=st=1723830960~exp=1723834560~hmac=32e446d89784eb4eff067ae96136e836c09cc83eac8bee1892caec5a1646f1b9&w=1060" alt="Woman Shopping" />
            </PromoImage>
          </Col>
        </Row>
        <PromoFooter>
          <PromoSocialLink href="#">
            <FaTwitter />
          </PromoSocialLink>
          <PromoSocialLink href="#">
            <FaWhatsapp />
          </PromoSocialLink>
          <PromoSocialLink href="#">
            <FaFacebookF />
          </PromoSocialLink>
          <PromoSocialLink href="#">
            <FaInstagram />
          </PromoSocialLink>
        </PromoFooter>
      </Container>
    </Promo>
  );
};

export default Home;

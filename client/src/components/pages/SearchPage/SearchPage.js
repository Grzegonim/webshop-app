import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../../redux/productsRecuer";
import { useEffect } from "react";
import OfferMiniature from "../../features/OfferMiniature/OfferMiniature";
import { Container, Row } from "react-bootstrap";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchPhrase } = useParams();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(searchProducts(searchPhrase));
  }, [searchPhrase]);

  return (
    <>
      <Row>
        { products.map(product => <OfferMiniature key={product.id} {...product} />) }
      </Row>

    </>
  )
}

export default SearchPage;
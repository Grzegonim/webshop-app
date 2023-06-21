import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Row } from "react-bootstrap";

import { searchProducts } from "../../../redux/productsRecuer";
import OfferMiniature from "../../features/OfferMiniature/OfferMiniature";

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
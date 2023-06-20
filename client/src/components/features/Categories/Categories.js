import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OfferMiniature from "../OfferMiniature/OfferMiniature";
import { Row } from "react-bootstrap";
import { fetchProductsByCategory } from "../../../redux/productsRecuer";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const products = useSelector(state => state.products);
  useEffect(() => {
    dispatch(fetchProductsByCategory(type));
  }, [type])


  return (
    <>
      <Row>
        {products.map(product => product.category === type && <OfferMiniature key={product.id} {...product} />)}
      </Row>
    </>
  )
}

export default Categories;
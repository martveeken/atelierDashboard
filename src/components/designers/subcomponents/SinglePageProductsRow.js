import React from 'react';
import { Link } from 'react-router-dom';

const ProductRow = ({ product }) => {
  const id = product._id;
  return (
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td className="center aligned">{product.status}</td>
            <td className="center aligned">
              <Link to={`/product/${id}`}>
                  <button className="ui button" type="submit">More</button>
              </Link>
            </td>
          </tr>
  );
};

export default ProductRow;

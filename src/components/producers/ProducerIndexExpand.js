import React from 'react';
import { Link } from 'react-router-dom';

const ProducerExpand = ({ producer }) => {
  const id = producer._id;
  return (
          <tr>
            <td>{producer.id}</td>
            <td>{producer.name}</td>
            <td>{producer.description}</td>
            <td className="center aligned">{producer.status}</td>
            <td className="center aligned">
              <Link to={`producer/${id}`}>
                  <button className="ui button" type="submit">More</button>
              </Link>
            </td>
          </tr>
  );
};

export default ProducerExpand;

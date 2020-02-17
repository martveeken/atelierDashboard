import React from 'react';
import { Link } from 'react-router-dom';

const DesignerIndexRow = ({ designer }) => {
  const id = designer._id;
  return (
          <tr>
            <td>{designer.id}</td>
            <td>{designer.name}</td>
            <td>{designer.description}</td>
            <td className="center aligned">{designer.status}</td>
            <td className="center aligned">
              <Link to={`designer/${id}`}>
                  <button className="ui button" type="submit">More</button>
              </Link>
            </td>
          </tr>
  );
};

export default DesignerIndexRow;

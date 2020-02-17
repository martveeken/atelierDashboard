import React from 'react';

const SinglePageGeneralInfo = (props) => {
  const {
    name,
    description,
  } = props.product;
  const date = new Date(props.product.created_at);
  const year = date.getFullYear();
  return (
    <div className="sixteen wide center aligned centered column">
      <h2 className="ui center aligned icon header">
        <i className="circular gift icon" />
        {name}
      </h2>
      <div className="meta">
        <span className="date">
          {`Created at ${year}`}
        </span>
      </div>
      <div className="description">
        {description}
      </div>
    </div>
  );
};

export default SinglePageGeneralInfo;

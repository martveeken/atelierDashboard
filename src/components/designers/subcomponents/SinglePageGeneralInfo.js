import React from 'react';

const SinglePageGeneralInfo = (props) => {
  const {
    name,
    description,
  } = props.designer;
  const date = new Date(props.designer.created_at);
  const year = date.getFullYear();
  return (
    <div className="sixteen wide center aligned centered column">
      <h2 className="ui center aligned icon header">
        <i className="circular users icon" />
        {name}
      </h2>
      <div className="meta">
        <span className="date">
          {`Joined in ${year}`}
        </span>
      </div>
      <div className="description">
        {description}
      </div>
    </div>
  );
};

export default SinglePageGeneralInfo;

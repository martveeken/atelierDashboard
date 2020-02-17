import React from 'react';

const SinglePageAddressCard = (props) => {
  const {
    street,
    postalcode,
    city,
    country,
    telephone,
    website,
  } = props.producer.contact;
  return (
    <div className="column">
      <div className="ui card">
        <div className="content">
          <h2 className="header">Address</h2>
          <div className="description">
            {street}
          </div>
          <div className="description">
            {postalcode}
          </div>
          <div className="description">
            {city}
          </div>
          <div className="description">
            {country}
          </div>

        </div>
        <div className="extra content">
            <i className="map icon" />
            Show on map
        </div>
        <div className="extra content">
            <i className="phone icon" />
            {telephone}
        </div>
        <div className="extra content">
            <i className="home icon" />
            <a href={`http://${website}`}> Website </a>
        </div>

      </div>
    </div>
  );
};

export default SinglePageAddressCard;

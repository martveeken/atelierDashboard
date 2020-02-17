import React from 'react';
import { Link } from 'react-router-dom';

const SinglePageContacts = (props) => {
  const {
    contacts,
    _id,
  } = props.producer;

  const renderContactsRow = () => {
    return (
      contacts.map(contact => (
        <div key={contact._id} className="extra content">
            <div>
              <i className="user icon" />
              <span>{contact.name}</span>
            </div>
            <div>
              <i className="chess icon" />
              <span>{contact.role}</span>
            </div>
            <div>
              <i className="phone icon" />
              <span>{contact.telephone}</span>
            </div>
            <div>
              <i className="mail icon" />
              <span>{contact.email}</span>
            </div>
            <div>
              <Link to={{ pathname: '/producereditcontact/', state: { contact, id: _id } }} className="item">
                <button className="mini ui button" type="submit">Edit</button>
              </Link>
              <Link to={{ pathname: '/producerdeletecontact/', state: { contact, id: _id } }} className="item">
                <button className="mini ui button" type="submit">Delete</button>
              </Link>
            </div>
        </div>
      ))
    );
  };
  return (
    <div className="column">
      <div className="ui card">
        <div className="content">
          <h2 className="header">Contacts</h2>
        </div>
        {renderContactsRow()}
        <div className="extra content">
          <Link to={`/produceraddcontact/${props.producer._id}`} className="item">
            <button className="ui button" type="submit">New contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePageContacts;

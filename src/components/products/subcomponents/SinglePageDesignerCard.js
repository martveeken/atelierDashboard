import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SinglePageDesignerCard extends Component {
  renderDesignerContact() {
    const { product, designer } = this.props;
    if (!product.designer_contact_id) {
      return (
        <div className="description">
          <Link to={{
            pathname: '/assigncontact',
            state: {
              product,
              designer,
            },
          }}
          >
            please assign a designer contact
          </Link>
        </div>
      );
    }
    if (designer.contacts === []) {
      return (
        <div className="description">
          Designer has no contact person
        </div>
      );
    }
    return designer.contacts.map((designerContact) => {
      if (designerContact._id === product.designer_contact_id) {
        return (this.renderContactsRow(designerContact));
      }
      return null;
    });
  }

  renderContactsRow(designerContact) {
    return (
        <div key={designerContact._id} className="extra content">
            <div>
              <i className="user icon" />
              <span>{designerContact.name}</span>
            </div>
            <div>
              <i className="chess icon" />
              <span>{designerContact.role}</span>
            </div>
            <div>
              <i className="phone icon" />
              <span>{designerContact.telephone}</span>
            </div>
            <div>
              <i className="mail icon" />
              <span>{designerContact.email}</span>
            </div>
        </div>
    );
  }

  render() {
    if (!this.props.designer) {
      return <div>Loading...</div>;
    }
    const { name } = this.props.designer;
    const { product, designer } = this.props;

    return (
      <div className="column">
        <div className="ui card">
          <div className="content">
            <h2 className="header">Designer</h2>
            <div className="description">
              {name}
            </div>
              {this.renderDesignerContact()}
          </div>
          <div className="content">
            <div className="description">
              <Link to={{
                pathname: '/assigncontact',
                state: {
                  product,
                  designer,
                },
              }}
              >
                switch contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePageDesignerCard;

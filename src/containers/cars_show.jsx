import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Aside from '../components/aside';
import { removeCar } from '../actions';

// eslint-disable-next-line react/prefer-stateless-function
class CarsShow extends React.Component {
  handleClick = () => {
    this.props.removeCar(this.props.history, this.props.car);
  }

  render() {
    const car = this.props.car;
    if (!car) {
      return (
        <Aside key="aside" garage={this.props.garage}>
          <Link to="/">Back to list</Link>
        </Aside>);
    }
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div className="car-container" key="car">
        <div className="car-card">
          <img className="car-picture" src="https://i5.walmartimages.com/asr/0c910ce9-2fcc-443d-aafc-e061f48a9caa_1.9a5c13390af26283e13b85ab96cbd98f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" />
          <div className="car-details">
            <span>{car.brand} - {car.model}</span>
            <ul>
              <li><strong>Owner:</strong> {car.owner}</li>
            </ul>
            <span className="plate">{car.plate}</span>
          </div>
          <button className="delete" onClick={this.handleClick}>
            <i className="fa fa-trash-o" aria-hidden="true" />
            Delete
          </button>
        </div>
      </div>
    ];
  }
}

function mapStateToProps(state, ownProps) {
  // how to access the existing props from the component ownProps
  // todo: state.posts.SEARCH (id from URLS)
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeCar }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);


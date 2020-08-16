import React, { Component } from 'react'

//redux
import { connect } from 'react-redux'
import { getParts } from '../../../../store/actions/getPartsActions'

class Header extends Component {

  handleClick = () => {
    // this.setState({ activeLink: id });
    this.props.getParts();
  };

  render() {
    return (
      <div className="dashboard-main-header">
          <span className="label">Turbo Charging</span>
          
          <div className="toggle-action2">
            <div className="left">
              <div className="btn-switch btn-switch-left btn-active">
                actions
              </div>
            </div>
            <div className="right">
              <div
                onClick={() => this.handleClick()}
                className="btn-switch btn-switch-right">
                parts
              </div>
            </div>
          </div>
          
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getParts: () => dispatch(getParts())
  }
}

export default connect(null, mapDispatchToProps)(Header)


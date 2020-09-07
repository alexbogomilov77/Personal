import React, { Component } from 'react'

//redux
import { connect } from 'react-redux'
import { getActions } from '../../../../store/actions/getActionsActions'
import { getParts } from '../../../../store/actions/getPartsActions'

class Header extends Component {

  state = {
    activeLink: null,
    buttons: [
      {
        id: "actions",
        position: "left"
      },
      {
        id: "parts",
        position: "right"
      }
    ]
  }

  handleClick = id => {
    console.log("id" + id);
    console.log("activeLink" + this.state.activeLink)
    this.setState({ activeLink: id });
    if (id === "parts") {
      this.props.getParts();
    } else {
      this.props.getActions(1);
    }
  };

  displayToggleButtons = () => this.state.buttons.map(item => {
    return (
      <div
        className={'btn-switch ' + 'btn-switch-' + item.position + (item.id === this.activeLink ? 'btn-item' : '')} key={item.id} onClick={() => this.handleClick(item.id)}
      >
        {this.activeLink}
      </div>
    )
  })

  render() {
    return (
      <div className="dashboard-main-header">
        <span className="label">Turbo Charging</span>

        <div className="toggle-action2">
          {this.displayToggleButtons()}
          {/* <div className="left">
            <div id="actions" className={'btn-switch btn-switch-left' + (item.part_id === this.activeLink ? 'btn-item' : '')}>
              actions
              </div>
          </div>
          <div className="right">
            <div
              onClick={() => this.handleClick()}
              id="parts"
              className={'btn-switch btn-switch-right' + (item.part_id === this.activeLink ? 'btn-item' : '')}>
              parts
              </div>
          </div> */}
        </div>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getActions: (id) => dispatch(getActions(id)),
    getParts: () => dispatch(getParts())
  }
}

export default connect(null, mapDispatchToProps)(Header)


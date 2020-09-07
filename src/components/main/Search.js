import React, { Component } from 'react'

//redux
// import { connect } from 'react-redux'
// import { getServices } from '../../../store/actions/getServicesActions'

class Search extends Component {

  state = {
    activeLink: null
  }

  handleClick = id => {
    this.setState({ activeLink: id });
    this.props.getServices(id);
  };

  displayRepairs = () => this.props.repairs.map(el => {
    let day = new Date(el.start_date).getUTCDate()
    let month = new Date(el.start_date).getUTCMonth()
    let year = new Date(el.start_date).getUTCFullYear()
    let date = `${day}.${month}.${year}`
    return (
      <li
        key={el.repair_id}
        onClick={() => this.handleClick(el.repair_id)}
        className={'history-nav-item ' + (el.repair_id === this.activeLink ? 'active-item': '')}>
          {date}
      </li>
    )
  })

  render() {
    return (
      <div>
        <code>no history!</code>
      </div>
    )
  }
}

export default Search


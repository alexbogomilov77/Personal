import React, { Component } from 'react'

//redux
import { connect } from 'react-redux'
import { getServices } from '../../../store/actions/getServicesActions'

class InfoBar extends Component {

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
    return this.props.repairs.length > 0 ? (
        <div className='infobar'>
            <div className='info'>
              <p className="infobar-label car-id">CB 3411 BA</p>
              <span className="specification">
                Honda Accord
              </span>
              <span className="specification">
                Diesel 2.2 CDTi
              </span>
              {/* <span className="specification">
                2005
              </span> */}
            </div>
            {/* <div className='divider'></div> */}
            <div className='history'>
              <p className="infobar-label">history</p>
              <ul className='history-nav'>
                { this.displayRepairs() }
              </ul>
            </div>
        </div>
    ) : (
      <div>
        <code>no history!</code>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getServices: (id) => dispatch(getServices(id))
  }
}

const mapStateToProps = (state) => {
  return {
    repairs: state.getRepairs.listOfRepairs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoBar)


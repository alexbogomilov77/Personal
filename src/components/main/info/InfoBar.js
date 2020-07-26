import React, { Component } from 'react'

//redux
import { connect } from 'react-redux'

class InfoBar extends Component {

  state = {
    activeLink: null
  }

  handleClick = id => {
    this.setState({ activeLink: id });
  };

  displayDates = () => this.props.services.map(el => {
    let day = new Date(el.startdate).getUTCDate()
    let month = new Date(el.startdate).getUTCMonth()
    let year = new Date(el.startdate).getUTCFullYear()
    let date = `${day}.${month}.${year}`
    return (
      <li
        key={date}
        onClick={() => this.handleClick(date)}
        className={'history-nav-item ' + (date === this.activeLink ? 'active-item': '')}>
          {date}
      </li>
    )
  })

  render() {
    return this.props.services.length > 0 ? (
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
                { this.displayDates() }
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

const mapStateToProps = (state) => {
  return {
    services: state.getServices.listOfServices
  }
}

export default connect(mapStateToProps)(InfoBar)


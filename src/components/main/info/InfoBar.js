import React, { Component } from 'react'

// import { connect } from 'react-redux'

class InfoBar extends Component {

  state = {
    activeLink: null
  }

  handleClick = id => {
    this.setState({ activeLink: id });
  };

  render() {
    const { activeLink } = this.state;

    return (
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
              {/* <ul className='history-nav'>
                {this.props.history.map((date) => {
                  return (
                    <li
                      key={date.id}
                      onClick={() => this.handleClick(date.id)}
                      className={'history-nav-item ' + (date.id === activeLink ? 'active-item': '')}>
                        {date.id}
                    </li>
                  );
                })}
              </ul> */}
            </div>
        </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     history: state.listHistory
//   }
// }

// export default connect(mapStateToProps)(InfoBar)
export default InfoBar


import {Component} from 'react'

import './index.css'

class CountriesList extends Component {
  state = {isVisit: false, visited: []}

  onClickVisit = () => {
    this.setState({isVisit: true})
  }

  render() {
    const {eachCountry} = this.props
    const {name, isVisited} = eachCountry
    return (
      <>
        <div className="list-container">
          <li className="list">
            <p className="country">{name}</p>
            {isVisited ? (
              <p className="visited-btn" type="button">
                Visited
              </p>
            ) : (
              <button
                onClick={this.onClickVisit}
                className="button"
                type="button"
              >
                Visit
              </button>
            )}
          </li>
        </div>
      </>
    )
  }
}

export default CountriesList

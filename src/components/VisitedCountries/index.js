import {Component} from 'react'
import './index.css'

class VisitedCountries extends Component {
  render() {
    const {each} = this.props
    const {name, imageUrl, isVisited} = each
    return (
      <li className="">
        {isVisited ? (
          <div className="flg-container">
            <img className="flg" src={imageUrl} alt="thumbnail" />
            <div className="country-remove-btn-container">
              <p className="country">{name}</p>
              <button className="remove-btn" type="button">
                Remove
              </button>
            </div>
          </div>
        ) : null}
      </li>
    )
  }
}

export default VisitedCountries

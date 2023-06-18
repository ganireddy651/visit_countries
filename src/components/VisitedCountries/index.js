import './index.css'

const VisitedCountries = props => {
  const {each, onRemoveCountry} = props
  const {name, imageUrl, isVisited, id} = each

  const onRemove = () => {
    onRemoveCountry(id)
  }

  return (
    <li>
      {isVisited && (
        <div className="flg-container">
          <img className="flg" src={imageUrl} alt="thumbnail" />
          <div className="country-remove-btn-container">
            <p className="country">{name}</p>
            <button className="remove-btn" type="button" onClick={onRemove}>
              Remove
            </button>
          </div>
        </div>
      )}
    </li>
  )
}

export default VisitedCountries

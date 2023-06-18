import './index.css'

const CountriesList = props => {
  const {eachCountry, getIsVisited} = props
  const {name, isVisited, id} = eachCountry

  const onButtonClick = () => {
    getIsVisited(id)
  }
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
            <button className="button" type="button" onClick={onButtonClick}>
              Visit
            </button>
          )}
        </li>
      </div>
    </>
  )
}

export default CountriesList

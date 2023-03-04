import './index.css'

const VisitCard = props => {
  const {countryDetails, onClickVisit} = props
  const {name, isVisited, id} = countryDetails

  const onClickButton = () => {
    onClickVisit(id)
  }
  return (
    <>
      <li className="list-item">
        <p className="name">{name}</p>
        {isVisited ? (
          <p className="visit-text">Visited</p>
        ) : (
          <button type="button" className="visit" onClick={onClickButton}>
            Visit
          </button>
        )}
      </li>
      <hr className="seperator" />
    </>
  )
}

export default VisitCard

import './index.css'

const VisitedCountryItem = props => {
  const {visitedCountryDetails, onClickDelete} = props
  const {imageUrl, name, id} = visitedCountryDetails

  const onClickRemove = () => {
    onClickDelete(id)
  }

  return (
    <li className="visit-item">
      <img src={imageUrl} alt="thumbnail" className="country-img" />
      <div className="country-card">
        <p className="country-name">{name}</p>
        <button className="remove-btn" type="button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem

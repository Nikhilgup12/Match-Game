import './index.css'

const MatchItem = props => {
  const {matchImage, imageTab} = props
  const {thumbnailUrl, id} = matchImage
  const imageClick = () => {
    imageTab(id)
  }
  return (
    <li className="image-list">
      <img
        src={thumbnailUrl}
        className="match-image"
        onClick={imageClick}
        alt="thumbnail"
      />
    </li>
  )
}
export default MatchItem

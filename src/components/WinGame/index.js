import './index.css'

const WinGame = props => {
  const {isScore, onPlayAgain} = props
  return (
    <div className="wincard-main-container">
      <div className="wincard-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          className="trophy-image"
          alt="trophy"
        />
        <p className="wincard-Score-para"> Your Score </p>
        <p className="wincard-Score"> {isScore} </p>
        <button className="wincard-btn" onClick={onPlayAgain} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p className="wincard-play-again-para"> Play Again </p>
        </button>
      </div>
    </div>
  )
}

export default WinGame

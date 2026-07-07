// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {val: false}

  feedbackGiven = () => {
    this.setState(prevState => ({val: !prevState.val}))
  }

  render() {
    const {val} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const emojiContainer = () => (
      <div className="customer-feedback">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis">
          {emojis.map(each => (
            <li className="emoji-container" key={each.id}>
              <img
                className="emoji-image"
                src={each.imageUrl}
                alt={each.name}
                onClick={this.feedbackGiven}
              />
              <p>{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
    const response = () => (
      <div className="response">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="heading">Thank you!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
    return (
      <div className="bg-container">
        <div className="main-container">
          {val ? response() : emojiContainer()}
        </div>
      </div>
    )
  }
}
export default Feedback

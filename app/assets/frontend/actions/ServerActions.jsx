import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: actionType.RECEIVED_TWEETS,
      rawTweets
    })
  }
}

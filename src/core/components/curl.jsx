import React from "react"
import PropTypes from "prop-types"
import curlify from "core/curlify"

export default class Curl extends React.Component {
  static propTypes = {
    request: PropTypes.object.isRequired
  }

  handleFocus(e) {
    e.target.select()
    document.execCommand("copy")
  }

  render() {
    let { request } = this.props
    console.log('curl')
    console.log(request)
    let curl = curlify(request)
    console.log(curl)
    return (
      <div>
        <h4>Curl</h4>
        <div className="copy-paste">
          <textarea onFocus={this.handleFocus} readOnly="true" className="curl" style={{ whiteSpace: "normal" }} value={curl}></textarea>
        </div>
      </div>
    )
  }

}

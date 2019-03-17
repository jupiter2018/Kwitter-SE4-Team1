import React, { Component } from "react"
import userIcon from "../userIcon.png"
import { connect } from "react-redux"
import { Image } from "semantic-ui-react"
import { domain } from "../actions/constants/index"

class UserImage extends Component {
    //preventing asynchronous setState calls when component is not mounted
    _isMounted = false
    state = { src: userIcon }
    componentDidMount() {
        this._isMounted = true
        fetch(`${domain}/users/${this.props.userId}/picture`).then(response => {
            if (response.status !== 404 && response.ok && this._isMounted) {
                this.setState({
                    src: `${domain}/users/${this.props.userId}/picture`
                })
            }
        })
    }
    componentWillUnmount() {
        this._isMounted = false
    }
    render() {
        return <Image src={this.state.src} size={this.props.size} circular />
    }
}

export default connect(
    null,
    null
)(UserImage)

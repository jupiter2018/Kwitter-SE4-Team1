import React, { Component } from "react"
import { Message } from "./Message"
import { getMessages } from "../actions/messages"
import { connect } from "react-redux"
import { Grid } from "semantic-ui-react"

export class MessageList extends Component {
    componentDidMount() {
        this.props.getMessages()
    }
    render() {
        return (
            <Grid container stackable>
                <Grid.Row>
                    <Grid.Column>
                        {this.props.messages.map(message => (
                            <Message />
                        ))}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMessages: () => {
            dispatch(getMessages())
        }
    }
}

export default connect(null, mapDispatchToProps)(MessageList)
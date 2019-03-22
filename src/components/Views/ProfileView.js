import React, { Component } from "react";

import StickyHeader from "../StickyHeader";
import UserProfile from "../UserProfile";
import UpdateProfileForm from "../UpdateProfileForm";
import UserMessageList from "../UserMessageList";
import UpdateProfilePicture from "../UpdateProfilePicture";

import { Grid, Segment, Header, Card } from "semantic-ui-react";

export default class ProfileView extends Component {
  render() {
    return (
      <React.Fragment>
        <StickyHeader />
        <Grid container stackable>
          <Grid.Row />
          <Grid.Row columns={2}>
            <Grid.Column floated="left" width={6}>
              <UserProfile />
              <Card>
                <UpdateProfilePicture />
                <UpdateProfileForm />
              </Card>
            </Grid.Column>
            <Grid.Column floated="right" width={10}>
              <Segment>
                <Header as="h2" textAlign="center">
                  My Kweets
                </Header>
                <UserMessageList />
              </Segment>{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
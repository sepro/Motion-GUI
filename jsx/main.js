import React from 'react';
import ReactDOM from 'react-dom';

import {Container, Card, Heading, Switch} from 'rebass';

const app = document.getElementById('motiongui');


class App extends React.Component {
  render() {
    return (
      <Container style="width:256, max-width:256">
          <Card rounded width={256}>
            <Heading level={1}>Motion-GUI</Heading>
            <Switch /><Switch checked />
            <a href={this.props.start_url}>start</a> <a href={this.props.stop_url}>stop</a>
          </Card>
      </Container>
    );
  }
}


ReactDOM.render(
    <App
        start_url={app.getAttribute('start_url')}
        stop_url={app.getAttribute('stop_url')}
        camera_img={app.getAttribute('camera_img')}/>,
    app);
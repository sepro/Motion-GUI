import React from 'react';
import ReactDOM from 'react-dom';

import {Flex, Box} from 'reflexbox';
import {Container, Card, Divider, Footer, Heading, Label, Switch} from 'rebass';

const app = document.getElementById('motiongui');


class App extends React.Component {
    constructor(props) {
       super(props);
       this.state = {running: false};
    }

    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({running: !this.state.running});
    }

  render() {
    return (
      <Flex align="center" justify="space-around">
          <Card rounded width={320}>
            <Heading level={1}>Motion-GUI</Heading>
            <Divider />
            <Flex align="center" justify="space-between">
            <Box auto p={0} >
                <Label>Switch camera { this.state.running ? "off" : "on" }</Label>
            </Box>
            <Box p={0}>
                <Switch onClick={this.handleClick} checked={this.state.running} />
            </Box>
            </Flex>
            <a href={this.props.start_url}>start</a> <a href={this.props.stop_url}>stop</a>
          </Card>
      </Flex>
    );
  }
}


ReactDOM.render(
    <App
        start_url={app.getAttribute('start_url')}
        stop_url={app.getAttribute('stop_url')}
        camera_img={app.getAttribute('camera_img')}/>,
    app);
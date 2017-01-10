import React from 'react';
import ReactDOM from 'react-dom';


const app = document.getElementById('motiongui');


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Motion-GUI</h1>
        <div>
            image
        </div>
        <div>
            <a href={this.props.start_url}>start</a> <a href={this.props.stop_url}>stop</a>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
    <App
        start_url={app.getAttribute('start_url')}
        stop_url={app.getAttribute('stop_url')}
        camera_img={app.getAttribute('camera_img')}/>,
    app);
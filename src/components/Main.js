require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

var yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">请编辑 <code>src/components/Main.js</code> ！</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

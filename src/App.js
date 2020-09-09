import React, { Component } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';
import SizeSetting from './SizeSetting';
import Reset from './Reset';
import Result from './Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12,
    }
  }

  onSetColor = (params) => {
    this.setState({
      color: params
    })
  }

  onChangeSize = (value) => {
    let newSize = this.state.fontSize + value;
    if (newSize >= 8 && newSize <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      });
    }
  }

  onResetValue = (valueDefault) => {
    this.setState({
      color: valueDefault.color,
      fontSize: valueDefault.fontSize
    }); 
  }

  render() {
    return(
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
          </div>
          <div className="col">
            <SizeSetting 
              fontSize={this.state.fontSize} 
              onReceiveSize={this.onSetSize} 
              onReceiveSiseChanged={this.onChangeSize}
            />
            <Reset onDefaultValue={this.onResetValue}/>
          </div>
        </div>
        <Result color={this.state.color} fontSize={this.state.fontSize} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class SizeSetting extends Component {
    changeSize = (size) => {
        this.props.onReceiveSiseChanged(size);
    }

    render() {
        return(
            <div className="card text-white">
              <div className="card-header bg-warning">Size: {this.props.fontSize}px</div>
              <div className="card-body">
                <button type="button" className="btn btn-success mr-2" onClick={() => this.changeSize(-2)} >Decrease</button>
                <button type="button" className="btn btn-success" onClick={() => this.changeSize(2)} >Increase</button>
              </div>
            </div>
        );
    }
}

export default SizeSetting;
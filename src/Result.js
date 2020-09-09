import React, { Component } from 'react';

class Result extends Component {
    setStyle() {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize + 'px'
        };
    }

    render() {
        return(
            <div>
                <label>Color: {this.props.color} - Fontsize: {this.props.fontSize}px </label>
                <div id="content" style={this.setStyle()} >
                    Content Setting
                </div>
            </div>
        );
    }
}

export default Result;
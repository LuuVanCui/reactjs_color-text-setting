import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc'],
        }
    }

    showColor(color) {
        return {
            backgroundColor: color
        }
    }

    setActiveColor(color) {
        this.props.onReceiveColor(color);
    }

    render() {
        var elmColors = this.state.colors.map((color, index) => {
            return  <p 
                        key={index} 
                        style={this.showColor(color)}
                        className={this.props.color === color ? 'active' : ''}
                        onClick={() => this.setActiveColor(color)}
                    ></p>
        });
        return(
            <div className="card">
                <div className="card-header bg-success">
                    ColorPicker
                </div>
                <div className="card-body">
                    {elmColors}
                </div>
            </div>
        );
    }
}

export default ColorPicker;
import React, { Component } from 'react';

class Reset extends Component {
    
    onReset = (color, fontSize) => {
        let valueDefault = {
            color,
            fontSize
        }
        this.props.onDefaultValue(valueDefault);
    }

    render() {
        return(
            <div>
                <button type="button" className="btn btn-info mt-2" onClick={() => this.onReset('red', 12)}>Reset</button>
            </div>
        );
    }
}

export default Reset;
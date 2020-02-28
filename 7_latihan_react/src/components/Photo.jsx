import React, { Component } from 'react';

class Photo extends Component {
    render() {
        return (
            <div>
                <img width={this.props.width} src={this.props.link} alt="broken"/>
            </div>
        );
    }
}

export default Photo;
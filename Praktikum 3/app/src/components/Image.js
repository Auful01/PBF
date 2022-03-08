import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <div>
                <img src={this.props.linkGambar} alt="Random" height={250} width={500} />
            </div>
        );
    }
}

export default Image;

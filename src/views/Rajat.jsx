import React, { Component } from 'react';

class Rajat extends Component {
    state = {
        isHovering : -1
        };
        
    handleMouseHover = () => {        
        this.setState({
            isHovering: this.state.isHovering*-1
        });
    };
    

  render() {
    return (
      <span className = "babarName"      
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}>
        <span
            dangerouslySetInnerHTML={{__html: this.state.isHovering==1? "Rajat Chattopadhyay":"R.C. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" }}
        />
    </span>
    );
  }
}
export default Rajat
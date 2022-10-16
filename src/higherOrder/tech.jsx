import React, { Component } from 'react'
import hoc from './hoc'
import "./tech.css"
class tech extends Component {
  render() {
    return (
        <div>
            <h2 className='technology'>HOC</h2>
            {this.props.showTooltip && <div className='box'>HIGHER ORDER COMPONET</div>}
        </div>
    )
  }
}
export default hoc(tech);
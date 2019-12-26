import React from 'react';
import ReactTimeout from 'react-timeout'


class Parent extends React.Component {
    componentDidMount(){
        this.handleClick()
        this.handleClick2()
    }
    state = {
        on: false
      }
      toggle = () => {
        this.setState({ on: !this.state.on })
      }
      handleClick = (e) => {
        this.props.setTimeout(this.toggle, 5000) // call the `toggle` function after 5000ms
      }
      handleClick2 = (e) => {
        this.props.setTimeout(this.toggle, 10000) // call the `toggle` function after 5000ms
      }
      render () {
        return (
          <div style={{ backgroundColor: (this.state.on ? 'yellow' : 'gray') }}>
            <button onClick={this.handleClick}>Click me!</button>
          </div>
        )
      }
    }

    export default ReactTimeout(Parent)
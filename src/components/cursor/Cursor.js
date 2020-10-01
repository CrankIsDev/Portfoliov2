import React, { Component } from 'react';
import './Cursor.css';

class Cursor extends Component {

  constructor(props) {
    super();

    this.state = {
      mouseX: 0,
      mouseY: 0,
      trailingX: 0,
      trailingY: 0,
    };
    this.cursor = React.createRef();
    this.cursorTrailing = React.createRef();
    this.animationFrame = null;
  }
  
  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);
    this.moveCursor();
  }
  
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove)
    cancelAnimationFrame(this.animationFrame);
  }
  
  onMouseMove = (evt) => {
    const { clientX, clientY } = evt;
    this.setState({
      mouseX: clientX,
      mouseY: clientY,
    });
  }
  
  moveCursor = () => {
    const { mouseX, mouseY, trailingX, trailingY } = this.state;
    const diffX = mouseX - trailingX;
    const diffY = mouseY - trailingY;
    this.setState({
      trailingX: trailingX + diffX / 2,
      trailingY: trailingY + diffY / 2,
    },
    () => {
      this.cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      this.cursorTrailing.current.style.transform = `translate3d(${trailingX}px, ${trailingY}px, 0)`;
      this.animationFrame = requestAnimationFrame(this.moveCursor);
    });
  }

  render() {
    return (
      <>
        <div className="cursor" ref={this.cursor}></div>
        <div className='cursor'ref={this.cursorTrailing}></div>
      </>
    );
  }
}
  
export default Cursor;
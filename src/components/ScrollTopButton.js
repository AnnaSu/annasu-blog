import React, { PureComponent } from 'react';
import styled from 'styled-components';
import scrollTop from '../utils/scrollTop';
import IconTop from './Icons/IconTop';

const Button = styled.button`
  position: fixed;
  right: 15px;
  bottom: 100px;
  padding: 0;
  font-size: 30px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  display: ${props => (props.show ? 'block' : 'none')};
`;

class ScrollTopButton extends PureComponent {
  state = {
    show: false,
  };

  componentDidMount() {
    const { scroll$ } = this.props;
    scroll$.subscribe(x => {
      if (!this.state.show && x >= 200) {
        this.setState({ show: true });
      } else if (this.state.show && x < 200) {
        this.setState({ show: false });
      }
    });
  }

  render() {
    const { show } = this.state;
    return (
      <Button show={show} onClick={scrollTop}>
        <IconTop />
      </Button>
    );
  }
}

export default ScrollTopButton;

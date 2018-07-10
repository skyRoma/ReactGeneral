import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: 18.5px 49.5px;
  color:  ${props => (props.disabled ? '#ffffff33' : 'white')}};
  font-family: sans-serif;
  font-size: 18px;
  border: 1px solid black;
  background-color: ${props => (props.disabled ? 'rgba(80, 80, 80, 0.5)' : 'rgba(0, 0, 0, 0.5);')}};         
  cursor: pointer;
`;

export default Button;

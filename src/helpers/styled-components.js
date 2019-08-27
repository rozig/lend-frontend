import styled, {
  createGlobalStyle, css
} from 'styled-components';

export const colors = {
  'primary': '#2980b9',
  'accent': '#3498db',
  'white': '#ffffff'
};

export const theme = { colors };

export const GlobalStyle = createGlobalStyle`

`;



export const Wrapper = styled.div`
  background: ${props => props.theme.colors.white};
  width: 1200px;
  margin: auto;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors[props.bgColor]};
  margin: ${props => props.margin ? props.margin : 0};
  color: ${props => props.theme.colors[props.color]};
  font-family: 'Open Sans', sans-serif;
  font-weight: lighter;
  border-radius: 3px;
  padding: 6px 10px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  -webkit-transition: .4s all;
  -moz-transition: .4s all;
  -ms-transition: .4s all;
  -o-transition: .4s all;
  transition: .4s all;
  ${props => {
    switch(props.type) {
      case 'solid':
        return css`
          border: 2px solid ${props.theme.colors[props.bgColor]};
          &:hover {
            background-color: ${props.theme.colors[props.color]};
            color: ${props.theme.colors[props.bgColor]};
          }
        `;
        break;
      case 'border':
        return css`
          border: 2px solid ${props.theme.colors[props.brColor]};
          &:hover {
            background-color: ${props => props.theme.colors[props.brColor]};
            color: ${props.theme.colors[props.bgColor]};
          }
        `;
      default:
        return css`
          border: 2px solid ${props.theme.colors[props.bgColor]};
          &:hover {
            background-color: ${props.theme.colors[props.color]};
            color: ${props.theme.colors[props.bgColor]};
          }
        `;
    }
  }}
`;

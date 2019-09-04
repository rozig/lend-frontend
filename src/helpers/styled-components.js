import styled, {
  createGlobalStyle, css
} from 'styled-components';

export const colors = {
  'primary': '#2980b9',
  'accent': '#3498db',
  'white': '#ffffff',
  'black': '#000000',
  'transactionText': '#303030',
  'disabledGray': '#636363',
  'error': '#c0392b',
  'background': '#ecedee',
  'border': '#c8c9c7',
  'tableGrayBg': '#e5e5e5',
  'tableHeaderText': '#717171'
};

export const theme = { colors };

export const GlobalStyle = createGlobalStyle`

`;



export const Button = styled.button`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  height: ${({ height }) => height ? height : 'unset'};
  color: ${({ theme, color }) => theme.colors[color]};
  width: ${({ width }) => width ? width : 'unset'};
  margin: ${({ margin }) => margin ? margin : 0};
  font-family: 'Montserrat', sans-serif;
  border-radius: 6px;
  font-weight: bold;
  padding: 9px 16px;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  -webkit-transition: .4s all;
  -moz-transition: .4s all;
  -ms-transition: .4s all;
  -o-transition: .4s all;
  transition: .4s all;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledGray};
    border-color: ${({ theme }) => theme.colors.disabledGray};
    cursor: not-allowed;
    &:hover {
      background-color: ${({ theme }) => theme.colors.disabledGray};
      border: 2px solid ${({ theme }) => theme.colors.disabledGray};
      color: ${({ theme }) => theme.colors.white};
    }
  }
  ${({ theme, styleClass, bgColor, brColor, color }) => {
    switch(styleClass) {
      case 'solid':
        return css`
          border: 2px solid ${theme.colors[bgColor]};
          &:hover {
            background-color: ${theme.colors[color]};
            color: ${theme.colors[bgColor]};
          }
        `;
        break;
      case 'border':
        return css`
          border: 2px solid ${theme.colors[brColor]};
          &:hover {
            background-color: ${theme.colors[brColor]};
            color: ${theme.colors[bgColor]};
          }
        `;
      default:
        return css`
          border: 2px solid ${theme.colors[bgColor]};
          &:hover {
            background-color: ${theme.colors[color]};
            color: ${theme.colors[bgColor]};
          }
        `;
    }
  }}
`;

export const Label = styled.label`
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 14px;
  display: block;
  width: 100%;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.black}10;
  font-family: 'Montserrat', sans-serif;
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 13px;
  display: block;
  border: none;
  width: 100%;
`;

export const FormGroup = styled.div``;

export const FormRow = styled.div`margin: 20px 0`;

export const Form = styled.form``;

export const Wrapper = styled.div`
  width: 1200px;
  margin: auto;
`;

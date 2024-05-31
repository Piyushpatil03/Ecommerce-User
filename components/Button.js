import styled, { css } from "styled-components";

export const ButtonStyle = css`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;

  ${(props) => props.primary && css`
      background-color: #5542f6;
      color: #fff;
      border: 0px;
    `}

  ${(props) => props.white && css`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  `}

  ${props => props.size === 'l' && css`
    font-size: 15px;    
  `}
`;


const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({children,...rest}) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}

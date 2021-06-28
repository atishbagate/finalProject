import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
html{
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: gray;
  }
}
body{
  font-family: 'Benne', serif;
  width: 100%;
  
}
 h2{
 font-family: 'Oswald', sans-serif;
 font-size: 3rem;
} 
`;

export default GlobalStyles;

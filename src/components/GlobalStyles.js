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
    background-color: goldenrod;
    border:1px double black;
  }
  &::-webkit-scrollbar-track{
    background-color: white;
  }
}
body{
  font-family: 'Benne', serif;
  width: 100%;  
  
}
 h3{
 font-family: 'Oswald', sans-serif;
 font-size: 1.5rem;
 padding: 1.5rem 0rem;
} 
p{
  font-size: 1.2rem;
  line-height: 200%;
  color:#696969;
}
a{
  text-decoration:none;
  color:#333;
}
img{
  display:block;
}
`;

export default GlobalStyles;

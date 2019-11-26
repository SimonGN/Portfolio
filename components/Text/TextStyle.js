import styled from 'styled-components';

const TextStyle = styled.section`
 width:100vw;

h1{
  margin-bottom:5%;
}
display:flex;
flex-direction: column;
nav{
  overflow: hidden;
  position:absolute;
  top:0 ;
  background-color:#FFF8E6;
  width:100vw;
  margin: 0 auto;
  height:100vh;
  display: ${props => props.view ? 'fixed' : 'none'};
}
.mobile{
  width:90%;
  margin: 0 auto;
  margin-top:5%;
  p{
    width: fit-content;
  }
}
.info{
  width:85vw;
  padding-top: 5%;
  padding-left: 5%;
  padding-bottom:5%;
  display:flex;
  flex-flow:column;
  justify-content: space-between;
  
}
.close{
  width:9vw;
  padding-top: 2%;
  padding-left: 3%;
  width: fit-content;
}
.button{
  padding-top:5%;
  display: flex;
  justify-content:space-between;
  display:none;
}

.email, .phone, .social, .links {
  display:flex;
  justify-content:space-between;
}
.email, .phone{
  margin-bottom: 2%
}
.links{
  width: 75%;
}



@media only screen and (min-width: 415px) and (max-width: 768px) {
  
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  
}

@media only screen and (min-width: 1025px) and (max-width: 1440px) {
  
}

@media only screen and (min-width: 1441px) {
  
}
`;

export { TextStyle };

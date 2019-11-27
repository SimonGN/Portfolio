import styled from 'styled-components';

const ProjectStyle = styled.section`
  width:90%;
  margin: 0 auto;
  img{
    background-repeat:no-repeat;
    background-size: contain;
    width:100%;
    height:auto;
    max-height:500px;
    display: block;
  }

  .info{
    width:95%;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4%;
    padding-bottom: 10%;
    div{
      display: flex;
      flex-direction: column;
      align-items: self-end;
    }
  }

   @media only screen and (min-width: 415px) and (max-width: 768px) {
    
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width:45%;
    margin-left: 52.5%;
    margin-top:2%;
    .info{
      padding-top: 1%;
      padding-bottom: 2%;
    }

  }

  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    width:45%;
    margin-left: 52.5%;
    margin-top:2%;
    .info{
      padding-top: 1%;
      padding-bottom: 2%;
    }
  }

  @media only screen and (min-width: 1441px) {
    width:45%;
    margin-top:2.5%;
    margin-left: 52.5%;

    .info{
      padding-top: 1%;
      padding-bottom: 2%;
    }
  }
`;

export { ProjectStyle };



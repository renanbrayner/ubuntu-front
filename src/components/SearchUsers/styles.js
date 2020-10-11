import styled from 'styled-components';
import colors from '../../styles/colorScheme';

const Container = styled.div`
  width: 100%;
  form {
    background-color: ${colors.backgroundLighter};
    padding: 1rem 2rem; 
    margin-bottom: 15px;
    border-radius: 16px;
    box-shadow: 0px 2px 10px 0px ${colors.backgroundDarkder};

    h1{
      font-size: 1.7rem;
      margin-bottom: 15px;
    }

    .flex {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      input {
        font-size: 1.2rem;
        padding: 1rem;
        width: 75%;
        border: 1px solid ${colors.backgroundDarkder};
        border-radius: 8px;
      }
      button {
        font-size: 1.2rem;
        width: 20%;
        border: none;
        border-radius: 8px;
        background: ${colors.green};
        color: ${colors.backgroundLighter};
      }
    }
  } 

  .profile {
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    background: ${colors.backgroundLighter};
    margin-bottom: 15px;
    border-radius: 16px; 
    box-shadow: 0px 2px 10px 0px ${colors.backgroundDarkder};

    .userinfo {
      display: flex;
      flex-direction: row;
      h1{
        padding: 0 1rem;
      }
    }

    .interests {
      margin: 0 auto;
    }
  }
`

export default Container

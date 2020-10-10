import styled from 'styled-components';
import colors from './colorScheme';

const Form = styled.div`

  .form {
    padding: 4rem 2.5rem;
    width: 500px;
    background-color: ${colors.backgroundLighter};
    border-radius: 16px;
    box-shadow: 0px 2px 10px 0px ${colors.backgroundDarkder};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .label {
      margin-bottom: 15px;
      cursor: pointer;
    }

    .input {
      border: 1px solid ${colors.backgroundDarkder};
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 15px;
    }

    .submit,
    .cancel {
      font-size: 1.2rem;
      border: none;
      border-radius: 8px;
      padding: 1rem; 
      color: ${colors.backgroundLighter};
      font-weight: bold;
      margin-bottom: 15px;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
    }

    .submit {
      background-color: ${colors.brown};
    }

    .cancel {
      background-color: ${colors.red};
    }

    .link {
      margin: 0 auto 15px auto; 
      color: ${colors.blue};
    }

    .divider {
      background-color: ${colors.backgroundDarkder};
      height: 1px;
      margin-bottom: 15px;
    }

    .navigation {
      font-size: 1.2rem;
      border: none;
      border-radius: 8px;
      padding: 1rem; 
      background-color: ${colors.green};
      color: ${colors.backgroundLighter};
      text-align: center;
      text-decoration: none;
      font-weight: bold;
    }
  }
`

export default Form

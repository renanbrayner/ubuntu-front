import styled from 'styled-components';
import colors from '../../styles/colorScheme';

const Container = styled.div`
  width: 100%;
  padding: 16px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.2rem;
    margin: 5px 0;
  }

  .error {
    color: ${colors.red};
  }

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    input {
      font-size: 1.2rem;
      padding: 8px;
      width: 75%;
      border-radius: 8px;
      border: 1px solid ${colors.backgroundDarkder};
      outline: none;
    }

    button {
      border-radius: 8px;
      width: 20%;
      border: 0;
      background-color: ${colors.green};
      color: ${colors.backgroundLighter};
    }
  }
`

export default Container

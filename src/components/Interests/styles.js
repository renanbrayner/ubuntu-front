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

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    input {
      font-size: 1.2rem;
      padding: 8px;
      width: 75%;
    }

    button {
      width: 20%;
      border: 0;
      background-color: ${colors.green};
      color: ${colors.backgroundLighter};
    }
  }
`

export default Container

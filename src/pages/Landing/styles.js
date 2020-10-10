import styled from 'styled-components';
import colors from '../../styles/colorScheme';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .text {
    .title {
      font-size: 7rem;
      font-weight: 400;
      color: ${colors.brown};

      .logo {
        width: auto;
        height: 6rem;
      }
    }
    
    .paragraph {
      font-size: 1.4rem;
    }
  }
`

export default Container;

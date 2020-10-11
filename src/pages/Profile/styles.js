import styled from 'styled-components';
import colors from '../../styles/colorScheme';

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 8rem; 
  padding-top: 2rem;
  display: grid;
  place-items: center;

  .profile-bar {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 22rem;
    background-color: ${colors.backgroundLighter};
    box-shadow: -2px 0px 10px 0px ${colors.backgroundDarkder};
    display: flex;
    flex-direction: column;

    .profile {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 20%;

      .profile-img {
        height: 120px;
        width: 120px;
        border: 4px solid ${colors.brown};
        border-radius: 100%;
      }

      .profile-text {
        display: flex;
        flex-direction: column;

        .username {
          margin-bottom: 15px;
        }
      }
    }
  }
`

export default Container

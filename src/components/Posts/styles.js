import styled from 'styled-components';
import colors from '../../styles/colorScheme';

const Container = styled.div`
  width: 50%;
  margin-right: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .form {
    background-color: ${colors.backgroundLighter};
    border-radius: 16px;
    padding: 1rem 2rem;
    width: 100%;
    box-shadow: 0px 2px 10px 0px ${colors.backgroundDarkder};
    margin-bottom: 15px;

    h1 {
      margin-bottom: 15px;
    }

    input {
      font-size: 1.2rem;
      width: 75%;
      padding: 8px;
      border: 1px solid ${colors.backgroundDarkder};
      border-radius: 8px;
    }

    button {
      font-size: 1.2rem;
      font-weight: bold;
      width: 20%;
      border: 0;
      border-radius: 8px;
      background-color: ${colors.green};
      color: ${colors.backgroundLighter};
    }

    .flex {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .post {
    width: 100%;
    background-color: ${colors.backgroundLighter};
    margin-bottom: 15px;
    border-radius: 16px;
    box-shadow: 0px 2px 10px 0px ${colors.backgroundDarkder};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .user {
      margin-right: auto;
      display: flex;
      flex-direction: row;
      img {
        width: 3rem;
        height: 3rem;
      }
      h1 {
        font-size: 1.5rem;
        padding: 0 1rem;
      }
    }
    .time {
      margin-left: auto;
    }
    .post-text {
      padding: 0.5rem;
      width: 80%;
      text-align: center;
      overflow-wrap: break-word;
    }
    .create-comment {
      .comment-input {
        border-radius: 8px;
        padding: 0.3rem;
        border: 1px solid ${colors.backgroundDarkder};
      } 

      .post-comment {
        padding: 0.3rem;
        margin-left: 15px;
        border-radius: 8px;
        border: none;
        background-color: ${colors.brown};
        font-weight: bold;
        color: ${colors.backgroundLighter};
      }
    }
  }
`

export default Container

import styled from 'styled-components'

const Container = styled.div`
  padding-left: 8rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  
  .search-container {
    padding-top: 2rem;
    padding-right: 7rem;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .map-container {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100vh;
    display: grid;
    place-items: center;
    color: #fff;
    background-color: teal;
  }
`

export default Container

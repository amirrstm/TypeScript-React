import styled from 'styled-components';

const MainContainer = styled.div`
  & .layout-content {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 32px;
    min-height: 100vh;
  }

  & .maps {
    padding: 64px 16px;
  }
`;

export default { MainContainer };

import Diary from './Diary';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.flexSet.flexCenterrow}
`;

const Layout = () => {
  return (
    <Wrap>
      <Diary />
    </Wrap>
  );
};

export default Layout;

import Diary from '@/Components/Diary';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('/img/bg.png') center no-repeat;
  background-size: cover;
  ${({ theme }) => theme.flexSet.flexRowCenter}
`;

const Layout = () => {
  return (
    <Wrap>
      <Diary />
    </Wrap>
  );
};

export default Layout;

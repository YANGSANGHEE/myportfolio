import styled from 'styled-components';

export const PageSet = styled.div`
  position: relative;
  width: 99%;
  height: 99%;
  background: url(/img/paper.png) no-repeat;
  background-size: cover;
  padding: 5%;
  overflow: hidden;
  ${({ theme }) => theme.flexSet.flexCenterRow}
  display: flex;
  align-items: center;
  justify-content: center;
`;

import styled from 'styled-components';
import { Pagewraps } from '@/common/Page';

const SetPage = styled.div`
  position: relative;
  ${({ theme }) => theme.flexSet.flexColumnCenter};
  & > img {
    width: 54.5rem;
    height: 74.4rem;
  }
  & > div {
    position: absolute;
    width: 12.6rem;
    height: 12.6rem;
    background-color: rgba(247, 143, 21, 1);
    color: #fff;
    font-family: 'Walter Turncoat', cursive;
    font-size: 2.8rem;
    letter-spacing: 0.04em;
    bottom: 4.8rem;
    right: 12.4rem;
    border-radius: 50%;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
    cursor: pointer;
    ${({ theme }) => theme.flexSet.flexColumnCenter}
    &:hover {
      background-color: rgba(22, 206, 184, 1);
      transform: rotate(360deg);
    }
  }
`;
const PageThree = () => {
  const gogit = () => {
    window.location.href = 'https://github.com/YANGSANGHEE';
  };
  return (
    <Pagewraps>
      <SetPage>
        <img src='/img/collage_two.png' alt='collage'></img>
        <div onClick={gogit}>MY GIT</div>
      </SetPage>
    </Pagewraps>
  );
};

export default PageThree;

import styled from 'styled-components';
import { Pagewraps } from '@/common/Page';

const Setpage = styled.div`
  ${({ theme }) => theme.flexSet.flexColumnCenter}
  padding: 3rem 1.7rem;
  position: relative;
  & > div:nth-child(1) {
    position: relative;
    & > div:nth-child(1) {
      position: absolute;
      top: 0;
      z-index: 2;
      width: 37.2rem;
      height: 17.2rem;
      background: #222;
      color: #fff;
      ${({ theme }) => theme.flexSet.flexColumnCenter}
      & > p {
        padding-left: 2rem;
        font-family: 'SegoePrint';
        font-size: 4.5rem;
        line-height: 74px;
        letter-spacing: 0.03em;
      }
    }
    & > div:nth-child(2) {
      position: relative;
      padding: 7.5rem 0 0 8rem;
      & > div {
        background: url('/img/squere_paper.png') center no-repeat;
        background-size: cover;
        width: 41.3rem;
        height: 61.7rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Cafe24Simplehae';
        font-style: normal;
        padding-left: 5rem;
        padding-top: 7rem;
        transform: rotate(7deg);
        & > p:nth-child(1) {
          font-size: 2.4rem;
          color: rgba(117, 111, 111, 1);
          margin-bottom: 3rem;
        }
        & > h1 {
          font-size: 6.4rem;
          color: rgba(77, 77, 77, 1);
          margin-bottom: 4.5rem;
        }
        & > p:nth-child(3) {
          font-size: 2rem;
          color: rgba(214, 81, 81, 1);
          line-height: 3.4rem;
          margin-bottom: 1rem;
        }
        & > h2 {
          font-size: 2.5rem;
          font-family: 'SegoePrint';
          text-align: right;
          color: rgba(77, 77, 77, 1);
          padding-right: 7rem;
        }
      }
    }
  }
  & > img {
    width: 21.6rem;
    height: 19.6rem;
    position: absolute;
    bottom: -1rem;
    left: 1rem;
  }
`;

const PageTwo = () => {
  return (
    <Pagewraps>
      <Setpage>
        <div>
          <div>
            <p>Design & Developer</p>
          </div>
          <div>
            <div>
              <p>기능도 화면도 디자인하고 싶은</p>
              <h1>양상희</h1>
              <p>
                다양한 경험을 통해 배운
                <br />
                책임감과 끈기로 <br />
                발전해 나가겠습니다.
              </p>
              <h2>#Outgoing Girl</h2>
            </div>
          </div>
        </div>
        <img src='/img/moniter.gif' alt='moniter'></img>
      </Setpage>
    </Pagewraps>
  );
};

export default PageTwo;

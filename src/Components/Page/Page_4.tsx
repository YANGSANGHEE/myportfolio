import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Pagewraps } from '@/common/Page';
import { TitleTape } from '@/common/Tape';

const SetPage = styled.div`
  ${({ theme }) => theme.flexSet.flexColumnCenter};
  position: relative;
  & > div {
    width: 47.2rem;
    height: 70.3rem;
    background: url('/img/pattern.png') no-repeat center;
    background-size: cover;
    padding: 1.5rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: rgba(154, 154, 154, 1);
        & > img {
          width: 7.5rem;
          height: 8.3rem;
          margin-bottom: 3rem;
        }
        & > p {
          text-align: right;
          font-family: 'SDMiSaeng';
          font-size: 2rem;
          letter-spacing: 0.04em;
          word-break: keep-all;
          & > span {
            font-size: 2.3rem;
          }
        }
        & > p.highlight {
          position: relative;
          margin-bottom: 3rem;
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 29%;
            right: 0;
            z-index: -1;
            background: url('/img/highlight.svg') no-repeat center;
          }
        }
        & > div.icons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          & > svg {
            &.git {
              margin-right: 1.5rem;
            }
            &:hover {
              cursor: pointer;
              path {
                fill: rgba(255, 138, 0, 1);
                transition: ease 0.3s;
              }
            }
          }
        }
      }
      & > div:nth-child(3) {
        width: 18.8rem;
        height: 58.4rem;
        background: url('/img/nongdam.png') no-repeat center;
        background-size: cover;
      }
    }
  }
  &::after {
    content: '';
    background: url('/img/vegetable.png') no-repeat center;
    background-size: cover;
    width: 25.8rem;
    height: 23.1rem;
    position: absolute;
    top: -6%;
    left: -10%;
  }
  &::before {
    content: '';
    background: url('/img/olive.png') no-repeat center;
    width: 10.5rem;
    height: 10.8rem;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const PageFour = () => {
  const urlLink = (URL: string) => {
    window.location.href = URL;
  };
  return (
    <Pagewraps>
      <SetPage>
        <div>
          <TitleTape>PROJECT C</TitleTape>
          <div>
            <div>
              <img src='/img/nongdam_logo.svg' alt='logo'></img>
              <p
                className={'highlight'}
                style={{ color: 'rgba(255, 138, 0, 1)' }}
              >
                KDT 해커톤 출전 예선통과한 프로젝트
              </p>
              <p style={{ fontSize: '2.3rem', marginBottom: '6rem' }}>
                <span style={{ color: 'rgba(255, 138, 0, 1)' }}>
                  푸드리퍼브
                </span>
                를 주제로 하여 <br />
                <span style={{ color: 'rgba(255, 138, 0, 1)' }}>
                  쇼핑몰
                </span>{' '}
                구축 나름 뿌듯햇던 프로젝트
              </p>
              <div className='icons'>
                <svg
                  className='git'
                  width='29'
                  height='29'
                  viewBox='0 0 29 29'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  onClick={() => {
                    urlLink('https://github.com/dlehdrb128/NongDam_Project');
                  }}
                >
                  <path
                    d='M14.5 0C10.6544 0 6.96623 1.52767 4.24695 4.24695C1.52767 6.96623 0 10.6544 0 14.5C0 18.3456 1.52767 22.0338 4.24695 24.753C6.96623 27.4723 10.6544 29 14.5 29C18.3456 29 22.0338 27.4723 24.753 24.753C27.4723 22.0338 29 18.3456 29 14.5C29 10.6544 27.4723 6.96623 24.753 4.24695C22.0338 1.52767 18.3456 0 14.5 0V0ZM18.322 26.3211H18.2096C18.1252 26.3259 18.0407 26.3133 17.9613 26.2843C17.8819 26.2552 17.8093 26.2101 17.748 26.152C17.6913 26.0921 17.6472 26.0214 17.6181 25.9443C17.5891 25.8671 17.5757 25.7849 17.5788 25.7025V24.0035C17.5861 23.4393 17.5909 22.8677 17.5909 22.2925C17.5889 21.872 17.5275 21.4538 17.4085 21.0504C17.2957 20.6426 17.0684 20.2757 16.7535 19.9931C17.5957 19.9118 18.4237 19.7204 19.2161 19.424C19.8846 19.1698 20.4893 18.7721 20.9875 18.2591C21.4793 17.7432 21.8455 17.1197 22.0569 16.4394C22.3141 15.6063 22.4365 14.7374 22.4194 13.8656C22.4241 13.257 22.3177 12.6525 22.1053 12.0821C21.8894 11.5072 21.5631 10.9801 21.1446 10.5306C21.235 10.3039 21.3006 10.0681 21.3404 9.82738C21.3802 9.58571 21.4008 9.34163 21.4008 9.09754C21.4008 8.78338 21.3645 8.46921 21.292 8.1635C21.2262 7.84994 21.1369 7.54176 21.025 7.24154C20.9823 7.22488 20.9367 7.21667 20.8909 7.21738H20.758C20.48 7.21979 20.207 7.26571 19.9435 7.3515C19.6534 7.4362 19.3695 7.54118 19.0941 7.66567C18.8201 7.78845 18.5535 7.92683 18.2954 8.08013C18.0356 8.23358 17.806 8.381 17.603 8.51754C15.5703 7.95099 13.4213 7.95099 11.3885 8.51754C11.1618 8.36598 10.9314 8.22013 10.6974 8.08013C10.4356 7.92555 10.1644 7.78753 9.88538 7.66687C9.61068 7.53826 9.32573 7.43277 9.0335 7.3515C8.77528 7.26619 8.50551 7.22096 8.23358 7.21738H8.10067C8.05521 7.21673 8.01007 7.22494 7.96775 7.24154C7.85424 7.54218 7.76139 7.85022 7.68983 8.1635C7.62458 8.47042 7.59317 8.78338 7.59196 9.09754C7.59196 9.34163 7.6125 9.58571 7.65358 9.82738C7.69346 10.0678 7.7575 10.3035 7.84692 10.5306C7.42955 10.9807 7.10442 11.5082 6.88992 12.0833C6.67638 12.6536 6.56868 13.258 6.57213 13.8668C6.55522 14.7339 6.67428 15.5983 6.92496 16.4285C7.14367 17.1088 7.50858 17.7335 7.99312 18.2603C8.49458 18.7703 9.09875 19.1666 9.76454 19.4252C10.5536 19.7273 11.3801 19.9206 12.2211 20.0003C11.9863 20.2132 11.8 20.474 11.6749 20.7652C11.5559 21.0532 11.4747 21.3554 11.4333 21.6642C10.9899 21.8765 10.505 21.9879 10.0135 21.9905C9.55696 22.0087 9.10643 21.8818 8.72658 21.628C8.3622 21.3579 8.05361 21.0198 7.81792 20.6323C7.71243 20.4695 7.59447 20.3152 7.46508 20.1707C7.32859 20.0188 7.17809 19.88 7.01558 19.7563C6.85541 19.6366 6.67983 19.539 6.49358 19.4663C6.31034 19.3859 6.11246 19.3444 5.91238 19.3442C5.86404 19.3454 5.81571 19.3502 5.76737 19.3563C5.70137 19.3561 5.6356 19.3642 5.57163 19.3805C5.5154 19.3952 5.46222 19.4197 5.41454 19.453C5.39286 19.4649 5.37474 19.4824 5.362 19.5036C5.34927 19.5248 5.34238 19.549 5.34204 19.5738C5.34712 19.6319 5.3649 19.6883 5.39413 19.7388C5.42336 19.7893 5.46333 19.8328 5.51121 19.8662C5.62358 19.9556 5.71663 20.0245 5.79154 20.0728L5.82779 20.0982C5.9885 20.2227 6.14317 20.3568 6.28938 20.5006C6.42471 20.619 6.54675 20.7531 6.65188 20.8993C6.76063 21.0431 6.85488 21.1966 6.931 21.3597C7.01921 21.5216 7.11225 21.7077 7.21013 21.9192C7.43729 22.4919 7.84088 22.9765 8.36288 23.3027C8.91025 23.5963 9.52408 23.7425 10.1464 23.7268C10.3566 23.7268 10.5681 23.7148 10.7771 23.6906C10.985 23.6568 11.1916 23.6217 11.3994 23.5806V25.6868C11.4032 25.7717 11.389 25.8564 11.3577 25.9355C11.3265 26.0145 11.2789 26.0861 11.2182 26.1455C11.1574 26.2049 11.0847 26.2509 11.005 26.2803C10.9252 26.3097 10.8402 26.322 10.7554 26.3163H10.6805C7.86267 25.406 5.46247 23.5196 3.91206 20.9967C2.36165 18.4739 1.76292 15.4804 2.22367 12.5553C2.68443 9.63018 4.1744 6.96568 6.42528 5.0416C8.67616 3.11752 11.54 2.06029 14.5012 2.06029C17.4624 2.06029 20.3263 3.11752 22.5771 5.0416C24.828 6.96568 26.318 9.63018 26.7787 12.5553C27.2395 15.4804 26.6408 18.4739 25.0904 20.9967C23.5399 23.5196 21.1397 25.406 18.322 26.3163V26.3223V26.3211Z'
                    fill='#848484'
                  />
                </svg>
                <svg
                  className='ppt'
                  width='22'
                  height='26'
                  viewBox='0 0 22 26'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  onClick={() => {
                    urlLink(
                      'https://docs.google.com/presentation/d/1Lpxd68_3F9eDOQD1ZNxfb2270AvDyewG37y8uVGVP1k/edit#slide=id.g178c56e5257_0_0'
                    );
                  }}
                >
                  <path
                    d='M2.83089 11.1716V10.3381H1.99745V11.1716H2.83089ZM9.49841 11.1716V10.3381H8.66497V11.1716H9.49841ZM21.1666 6.17094H22V5.82589L21.7567 5.58086L21.1666 6.17094V6.17094ZM16.1659 1.17029L16.756 0.580218L16.511 0.336853H16.1659V1.17029ZM2.83089 12.005H4.49777V10.3381H2.83089V12.005ZM3.66433 18.6725V14.5053H1.99745V18.6725H3.66433ZM3.66433 14.5053V11.1716H1.99745V14.5053H3.66433ZM4.49777 13.6719H2.83089V15.3388H4.49777V13.6719ZM5.33121 12.8385C5.33121 13.0595 5.2434 13.2715 5.0871 13.4278C4.9308 13.5841 4.71881 13.6719 4.49777 13.6719V15.3388C5.1609 15.3388 5.79686 15.0754 6.26576 14.6065C6.73466 14.1376 6.99809 13.5016 6.99809 12.8385H5.33121ZM4.49777 12.005C4.71881 12.005 4.9308 12.0928 5.0871 12.2491C5.2434 12.4054 5.33121 12.6174 5.33121 12.8385H6.99809C6.99809 12.1753 6.73466 11.5394 6.26576 11.0705C5.79686 10.6016 5.1609 10.3381 4.49777 10.3381V12.005ZM9.49841 12.005H11.1653V10.3381H9.49841V12.005ZM10.3319 18.6725V14.5053H8.66497V18.6725H10.3319ZM10.3319 14.5053V11.1716H8.66497V14.5053H10.3319ZM11.1653 13.6719H9.49841V15.3388H11.1653V13.6719ZM11.9987 12.8385C11.9987 13.0595 11.9109 13.2715 11.7546 13.4278C11.5983 13.5841 11.3863 13.6719 11.1653 13.6719V15.3388C11.8284 15.3388 12.4644 15.0754 12.9333 14.6065C13.4022 14.1376 13.6656 13.5016 13.6656 12.8385H11.9987ZM11.1653 12.005C11.3863 12.005 11.5983 12.0928 11.7546 12.2491C11.9109 12.4054 11.9987 12.6174 11.9987 12.8385H13.6656C13.6656 12.1753 13.4022 11.5394 12.9333 11.0705C12.4644 10.6016 11.8284 10.3381 11.1653 10.3381V12.005ZM16.9994 10.3381V18.6725H18.6663V10.3381H16.9994ZM15.3325 12.005H20.3331V10.3381H15.3325V12.005ZM1.99745 8.67126V2.83717H0.330566V8.67126H1.99745ZM20.3331 6.17094V8.67126H22V6.17094H20.3331ZM2.83089 2.00373H16.1659V0.336853H2.83089V2.00373ZM15.5759 1.76037L20.5765 6.76101L21.7567 5.58086L16.756 0.580218L15.5759 1.76037V1.76037ZM1.99745 2.83717C1.99745 2.61613 2.08526 2.40414 2.24156 2.24784C2.39786 2.09154 2.60985 2.00373 2.83089 2.00373V0.336853C2.16776 0.336853 1.53179 0.600279 1.06289 1.06918C0.593992 1.53808 0.330566 2.17405 0.330566 2.83717H1.99745ZM0.330566 20.3394V22.8397H1.99745V20.3394H0.330566ZM2.83089 25.3401H19.4997V23.6732H2.83089V25.3401ZM22 22.8397V20.3394H20.3331V22.8397H22ZM19.4997 25.3401C20.1628 25.3401 20.7988 25.0766 21.2677 24.6077C21.7366 24.1388 22 23.5029 22 22.8397H20.3331C20.3331 23.0608 20.2453 23.2728 20.089 23.4291C19.9327 23.5854 19.7207 23.6732 19.4997 23.6732V25.3401ZM0.330566 22.8397C0.330566 23.5029 0.593992 24.1388 1.06289 24.6077C1.53179 25.0766 2.16776 25.3401 2.83089 25.3401V23.6732C2.60985 23.6732 2.39786 23.5854 2.24156 23.4291C2.08526 23.2728 1.99745 23.0608 1.99745 22.8397H0.330566Z'
                    fill='#848484'
                  />
                </svg>
              </div>
              <p>
                #1Month Project
                <br />
                #5 Member
                <br />
                #개발환경 구축 및 개발
                <br />
                #k-digital-hackerthon
                <br />
                # Resful API
                <br />
                #MYSQL / MariaDB
                <br />
                #express
                <br />
                #React
                <br />
              </p>
            </div>
            <svg
              width='10'
              height='600'
              viewBox='0 0 10 657'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ margin: '0 2.5rem' }}
            >
              <path
                d='M7.81878 1C7.81878 10.1231 6.8385 19.8638 7.49423 29.4408C8.1622 39.1966 8.08432 49.616 8.08432 59.6053C8.08432 72.2396 8.15542 84.8333 8.08432 97.5263C8.04095 105.267 7.21097 112.738 7.03691 120.365C6.86933 127.708 6.75662 134.955 6.75662 142.342C6.75662 156.311 5.69445 170.006 5.69445 183.902C5.69445 201.361 6.72246 217.974 7.49423 235.23C7.83756 242.906 7.93501 250.587 8.09907 258.308C8.25351 265.576 8.29208 273.772 8.67441 280.907C9.43996 295.194 8.6154 310.284 8.6154 324.67C8.6154 341.373 7.63127 357.205 7.30245 373.747C6.92917 392.525 6.09331 410.707 5.29614 429.336C4.47569 448.508 3.57013 468.538 3.57013 487.941C3.57013 496.336 3.57013 504.731 3.57013 513.126C3.57013 519.289 3.59255 526.748 3.17182 532.757C2.24415 546.004 3.99947 560.215 3.17182 573.646C2.78584 579.91 3.05202 586.595 2.7145 592.894C2.35386 599.624 2.82061 606.689 2.3752 613.339C2.03641 618.397 2.24243 624.112 2.24243 629.283C2.24243 633.074 1.88943 636.776 1.7261 640.487C1.59923 643.369 1.44581 647.155 1.44581 649.967C1.44581 652.568 0.654621 653.441 1.18027 656'
                stroke='#756F6F'
                stroke-linecap='round'
              />
            </svg>
            <div></div>
          </div>
        </div>
      </SetPage>
    </Pagewraps>
  );
};

export default PageFour;

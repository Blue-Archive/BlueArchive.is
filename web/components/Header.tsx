import styled from '@emotion/styled';
import Link from 'next/link';

const HeaderElement = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 40px;
  background: url('/images/header/bg.png') #fff no-repeat left center/auto 100%;
  border-radius: 0 0 7px 7px;
  box-shadow: 0 2px 4px #4c62947f;
  justify-content: center;
  z-index: 1431718628;
`;

const HeaderBox = styled.div`
  width: calc(100% - 116px);
  height: 100%;
  max-width: 980px;
  font-size: 0.8rem;
  nav {
    ul {
      display: flex;
      li {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 833px) {
    width: calc(100% - 80px);
  }

  @media (max-width: 640px) {
    width: calc(100% - 40px);
  }
`;

const HeaderLink = styled.a`
  display: flex;
  line-height: 40px;
  color: #4e5863;

  &:hover {
    text-decoration: none;
  }
`;

function HeaderNavigation() {
  return (
    <HeaderElement>
      <HeaderBox>
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                <HeaderLink>홈</HeaderLink>
              </Link>
            </li>
            {/* <li>
              <Link href="#" passHref>
                <HeaderLink>캐릭터 목록</HeaderLink>
              </Link>
            </li> */}
          </ul>
        </nav>
      </HeaderBox>
    </HeaderElement>
  );
}

export default HeaderNavigation;

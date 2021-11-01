import { css, Global } from '@emotion/react';

const MainFont = (
  <Global
    styles={css`
      @font-face {
        font-family: 'MainFont';
        font-weight: 300;
        src: local(경기천년제목 Light), url(/fonts/MainFontL.eot);
        src: url(/fonts/MainFontL.eot?#iefix) format('embedded-opentype'),
          url(/fonts/MainFontL.woff2) format('woff2'),
          url(/fonts/MainFontL.woff) format('woff'),
          url(/fonts/MainFontL.ttf) format('truetype');
      }

      @font-face {
        font-family: 'MainFont';
        font-weight: 400;
        src: local(경기천년제목 Medium), url(/fonts/MainFontM.eot);
        src: url(/fonts/MainFontM.eot?#iefix) format('embedded-opentype'),
          url(/fonts/MainFontM.woff2) format('woff2'),
          url(/fonts/MainFontM.woff) format('woff'),
          url(/fonts/MainFontM.ttf) format('truetype');
      }

      @font-face {
        font-family: 'MainFont';
        font-weight: 700;
        src: local(경기천년제목 Bold), url(/fonts/MainFontB.eot);
        src: url(/fonts/MainFontB.eot?#iefix) format('embedded-opentype'),
          url(/fonts/MainFontB.woff2) format('woff2'),
          url(/fonts/MainFontB.woff) format('woff'),
          url(/fonts/MainFontB.ttf) format('truetype');
      }

      @font-face {
        font-family: 'MainFontV';
        font-weight: 900;
        src: local(경기천년제목V Bold), url(/fonts/MainFontVB.eot);
        src: url(/fonts/MainFontVB.eot?#iefix) format('embedded-opentype'),
          url(/fonts/MainFontVB.woff2) format('woff2'),
          url(/fonts/MainFontVB.woff) format('woff'),
          url(/fonts/MainFontVB.ttf) format('truetype');
      }
    `}
  />
);

export default MainFont;

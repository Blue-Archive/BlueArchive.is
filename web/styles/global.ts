import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    line-height: 1.6;
    padding: 0;
    margin: 0;
    color: #000000;
    font-size: 20px;
    font-family: 'MainFont';
    letter-spacing: -0.03em;
    user-select: none;
  }

  @media (max-width: 1024px), (max-height: 640px) {
    html, body {
      font-size: 15px
    }
  }

  * {
    box-sizing: border-box;
    word-break: keep-all;
    background-repeat: no-repeat;
    -webkit-tap-highlight-color: transparent;
  }

  h1, h2, h3, h4, h5, h6, p, ul, ol, dl {
    margin: 0;
    padding: 0
  }

  li {
    list-style: none;
    margin: 0
  }

  address {
    font-style: normal
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    display: block;
    user-select: none;
    -webkit-touch-callout: none
  }

  input, select, textarea {
    padding: 0;
    border: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    margin: 0;
    font-family: $FONT_FAMILY;
    font-size: inherit;
    outline: none;
    resize: none;
    -moz-appearance: none;
    appearance: none;

    &[type="password"] {
      font-family: $FONT_FAMILY;

      &::placeholder {
        font-family: $FONT_FAMILY;
      }
    }

    &[type="radio"] {
      -webkit-appearance: radio;
      -moz-appearance: radio;
      appearance: radio;
    }
  }

  button {
    padding: 0;
    background: none;
    border: none;
    margin: 0;
    font-size: inherit;
    font-family: $FONT_FAMILY;
    cursor: pointer;
    outline: none;
    color: inherit;
  }

  label {
    cursor: pointer
  }

  mark {
    background: none
  }

  table {
    border: none;
    border-collapse: collapse;

    * {
      padding: 0
    }
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-left: 0;
  }

  em {
    font-style: normal;
  }

  .ReactModalPortal {
    position: relative;
    z-index: 1431718629;
  }


  .global-section {
    max-width: 1536px;
    padding: 0 85px;
    margin: auto;
  }

  vr {
    display: inline-block;
    width: 0;
    height: 100%;
    margin: 0 .5rem;
    border-left: 1px solid #fff;
    vertical-align: top
  }

  [contenteditable="true"] {
    outline: none
  }

  @media (min-width: $MAX-WIDTH-TABLET + 1) {
    .tablet {
      display: none !important;
    }

    .tablet-mobile {
      display: none !important;
    }

    .mobile {
      display: none !important;
    }
  }

  @media (min-width: $MAX-WIDTH-MOBILE + 1) and (max-width: $MAX-WIDTH-TABLET){
    .pc {
      display: none !important;
    }

    .mobile {
      display: none !important;
    }
  }

  @media (max-width: $MAX-WIDTH-MOBILE) {
    .pc {
      display: none !important;
    }

    .pc-tablet {
      display: none !important;
    }

    .tablet {
      display: none !important;
    }
  }
`

export default GlobalStyle

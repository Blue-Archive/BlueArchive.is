import { css, Global } from '@emotion/react';

export const Miu = (
  <Global
    styles={css`
      .miu-hover-big {
        transition: transform 0.3s;

        &:hover {
          transform: scale(1.15);
        }
      }

      .miu-hide {
        display: none !important;
      }

      .miu-hide-scroll {
        overflow: scroll;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
          display: none;
        }
      }

      .miu-border-err {
        border: 1px solid #eb2e2e !important;
      }

      .miu-invertX {
        transform: scaleX(-1);
      }

      .miu-invertY {
        transform: scaleY(-1);
      }

      .miu-bdrs {
        -webkit-border-radius: 140317180628px;
        -moz-border-radius: 140317180628px;
        border-radius: 140317180628px;
      }

      .miu-emphasis {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          top: -0.1em;
          left: 0.4em;
          display: inline-block;
          width: 0.2em;
          height: 0.2em;
          -webkit-border-radius: 1em;
          -moz-border-radius: 1em;
          border-radius: 1em;
          background: #000;
        }
      }

      .miu-disable-transition {
        transition: none !important;
      }

      i.miu-x {
        display: inline-block;
        position: relative;
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-color: transparent;

        &::before,
        &::after {
          position: absolute;
          content: ' ';
          height: 115%;
          top: -15%;
          left: 50%;
          background-color: #646464;
          border: 1px solid #646464;
          -webkit-border-radius: 1px;
          -moz-border-radius: 1px;
          border-radius: 1px;
        }

        &::before {
          transform: rotate(45deg);
        }

        &::after {
          transform: rotate(-45deg);
        }
      }

      @keyframes miu-bounceD {
        0% {
          bottom: 30px;
        }
        75% {
          bottom: 50px;
        }
        100% {
          bottom: 30px;
        }
      }

      @keyframes miu-bounceB {
        0% {
          bottom: 30px;
        }
        25% {
          bottom: 50px;
        }
        100% {
          bottom: 30px;
        }
      }

      @keyframes miu-fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes miu-fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `}
  />
);

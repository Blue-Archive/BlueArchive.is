import styled from '@emotion/styled';

interface SectionProps {
  backgroundImage?: string;
  backgroundColor?: string;
  backgroundSize?: string;
  height?: string;
  minHeight?: string;
  heightOverflow?: boolean;
  overlayColor?: string;
  alignItems?: string;
  justifyContent?: string;
}

const Section = styled.section<SectionProps>`
  position: relative;
  display: flex;
  width: 100%;
  ${(props) => (props.heightOverflow ? 'min-' : '')}height: ${(props) =>
    props.height ?? 'auto'};
  background-image: ${(props) =>
      props.overlayColor
        ? `linear-gradient(${props.overlayColor}, ${props.overlayColor}),`
        : ''}
    url(${(props) => props.backgroundImage ?? ''});
  background-color: ${(props) => props.backgroundColor ?? 'none'};
  background-size: ${(props) => props.backgroundSize ?? 'cover'};
  background-position: center;
  margin: 0 auto;
  overflow: hidden;
  align-items: ${(props) => props.justifyContent ?? 'flex-start'};
  justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
  flex-direction: column;
`;

export type { SectionProps };
export { Section as default };

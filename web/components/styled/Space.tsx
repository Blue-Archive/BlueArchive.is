import styled from '@emotion/styled';

interface MarginProps {
  width?: string;
  height?: string;
}

const Space = styled.div<MarginProps>`
  width: ${(props) => props.width ?? '100%'};
  height: ${(props) => props.height ?? '100%'};
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
`;
export default Space;

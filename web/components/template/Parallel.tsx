import styled from '@emotion/styled';

export const NormalBox = styled.div`
  display: flex;
  border-radius: 4px;
`;

export const ParallelBox = styled(NormalBox)`
  transform: skew(-10deg);

  .straight {
    transform: skew(10deg);
  }
`;

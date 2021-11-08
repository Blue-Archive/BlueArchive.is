import styled from '@emotion/styled';

interface ArticleProps {
  flexDirection?: string;
  textAlign?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
}

const Article = styled.article<ArticleProps>`
  position: relative;
  display: flex;
  width: calc(100% - 116px);
  max-width: 980px;
  height: ${(props) => props.height ?? 'auto'};
  margin: 0 auto;
  text-align: ${(props) => props.textAlign ?? 'left'};
  flex-direction: ${(props) => props.flexDirection ?? 'row'};
  align-items: ${(props) => props.alignItems ?? 'flex-start'};
  justify-content: ${(props) => props.justifyContent ?? 'flex-start'};

  @media (max-width: 833px) {
    width: calc(100% - 80px);
  }

  @media (max-width: 640px) {
    width: calc(100% - 40px);
  }
`;

export default Article;

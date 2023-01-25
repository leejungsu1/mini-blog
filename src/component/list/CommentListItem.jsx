import React from "react";
import styled from "styled-components";

const Warpper = styled.div`
  width: calc(100%-32px);
  padding: 16px;
  display: flex;
  flex-directon: column;
  align-items: flex-start;
  justfi-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hovor {
    background: lightgrey;
  }
`;

const ContentText = styled.p`
  font-size: 14px;
`;

function CommentListItem(props) {
  const { comment } = props;

  return (
    <Warpper>
      <ContentText>{comment.content}</ContentText>
    </Warpper>
  );
}

export default CommentListItem;

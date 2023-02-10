import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  > div {
    &:first-child {
      min-width: 500px;
      padding-right: 100px;

      .select-persona {
        margin-bottom: 15px;
      }

      .text-field {
        &:not(:last-child) {
          margin-bottom: 15px;
        }
      }
    }
  }
`;

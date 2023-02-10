import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;

  > div {
    &:first-child {
      min-width: 500px;
      padding-right: 100px;

      .select-persona {
        margin-bottom: 15px;
      }

      .select-hackathon {
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

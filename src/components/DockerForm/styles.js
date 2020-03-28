import styled from "styled-components"

export const Container = styled.div``
export const Flex = styled.div`
  display: flex;
  margin: 15px 0;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex: 1;
    .ant-input {
      flex: 2;
      margin: 0 20px;
    }
    label {
      width: 100px;
      margin-right: 20px;
    }

    .ant-radio-group {
      margin: 0 20px;

      text-align: center;
      label {
        margin-right: 0;
        width: auto;
      }
    }
    .ant-select {
      width: 200px;
      margin: 0 20px;
    }
  }
`

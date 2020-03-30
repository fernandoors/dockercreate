import styled from "styled-components"

export const Container = styled.div`
  .ant-card {
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .ant-collapse{
    margin-top: 20px;
  }
  .ant-collapse-extra{
    margin: 0 20px;
  }
`
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
      width: 110px;
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

export const Extras = styled.div`
  display: flex;
  margin: 20px 0;
  .ant-select{
    width: 100px;
    margin-right: 20px;
  }
  .ant-input {
    flex: 1;
    margin-right: 20px;
  }
  .ant-button{
    width: 80px;
  }
  
`
import styled from "styled-components"

export const Container = styled.div`
  *{
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important 
  }
  .ant-card {
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .ant-collapse {
    margin-top: 20px;
  }
  .ant-collapse-extra {
    margin: 0 20px;
  }
  .ant-btn-danger {
    margin-right: 20px
  }
  .anticon-question-circle {
        margin-left: 10px;
  }
  .ant-card-actions{
    display: none;
  }
  @media (max-width: 500px) {
    .ant-collapse-content-box{
      >div{
        border: 1px dashed rgba(0,0,0,0.3);
        display: flex;
        padding: 10px;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        .ant-select, .ant-input{
          width: 100%;
          margin: 15px 0;
        }
        .ant-btn{
          align-self: flex-end;
        }
      }
    }
    .ant-card-actions{
      display: block;
      .ant-btn-primary{
        position: relative;
        right: 26px;
      }
    }
    .ant-card-extra{
      display: none;
    }
    
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
    align-items: center;
    .ant-input {
      flex: 2;
      margin: 0 20px;
    }
    label {
      width: 130px;
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
    .ant-select-selector{
      width: 120px;
      height: 40px;
    }
  }
  .anticon-info-circle{
    position: relative;
    top: -10px;
    right: 15px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    >div{
      width: 100%;
      > label{
        width: auto;
        text-align: left;
      }
      .ant-input, .ant-select, .ant-radio-group {
        width: auto;
      }
      margin: 15px 0;
    }
  }
  @media (max-width: 500px) {
    >div{
      display: flex;
      flex-direction: column;
      align-items: stretch;
      >label{
        padding-left: 20px;
        margin-bottom: 10px;
      }
    }
    .anticon-info-circle{
      position: relative;
      right: 0;
      top: -30px;
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
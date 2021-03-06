import styled from "styled-components"

export const Container = styled.div`
  .ant-card-actions{
    display: none;
  }
  .ant-card {
    margin-bottom: 30px;
    border-radius: 10px;
  }
  @media (max-width: 450px) {
    .ant-card-actions{
      display: block;
    }
    .ant-card-extra{
      display: none;
    }
  }
`
export const ButtonComponent = styled.div`
  display: grid;
  padding: 30px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  .ant-btn {
    width: 100%;
  }
  .ant-btn:hover{
    color: black;
  }
  @media (max-width: 450px) {
    grid: none;
    margin: 15px 0;
  }
`

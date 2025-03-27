import styled from 'styled-components'

export const Bgcontainer = styled.div`
  background-image: linear-gradient(to bottom, #0099fa, #00fa99);
  min-height: 100vh;
  padding: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 22px;
  color: #ffffff;
  font-weight: 400;
  text-shadow: 1px 1px 5px #3a3b3c;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`
export const ParaText = styled.p`
  color: #ffffff;
  font-size: 18px;
  text-shadow: 1px 1px 5px #3a3b3c;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 15px;
  min-height: 100px;
  width: 100%;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`
export const Label = styled.p`
  font-family: Roboto;
  font-size: 17px;
  color: #1aa260;
`
export const ContentDiv = styled.div`
  margin: 8px;
  @media screen and (min-width: 768px) {
    margin: 20px;
  }
`
export const ButtonsDiv = styled.div`
  background-color: #e6e6fa;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
`
export const ButtonRandom = styled.button`
  background-color: ${props => (props.random ? '#ffffff' : '#e6e6fa')};
  color: #000000;
  border: none;
  padding: 10px;
  margin: 5px;
  width: 210px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  ${props => props.random && `box-shadow: 0px 4px 16px #bfbfbf`}
`
export const ButtonMemorable = styled.button`
  background-color: ${props => (props.memorable ? '#ffffff' : '#e6e6fa')};
  color: #000000;
  cursor: pointer;
  border: none;
  padding: 10px;
  margin: 5px;
  width: 210px;
  border-radius: 5px;
  font-size: 15px;
  ${props => props.memorable && `box-shadow: 0px 4px 16px #bfbfbf`}
`
export const LabelElnt = styled.label`
  font-family: Roboto;
  color: #0c090a;
  cursor: pointer;
  font-size: 16px;
`
export const InputRange = styled.input`
  width: 300px;
  height: 3px;
  background-color: #ddd;
  outline: none;
  cursor: pointer;
  margin-left: 20px;
`
export const SpanEl = styled.span`
  font-family: Roboto;
  border: 1px solid #000000;
  margin-left: 15px;
  padding: 4px;
  width: 30px;
  border-radius: 3px;
  text-align: center;
`
export const RangeInputDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
  margin-bottom: 7px;
`
export const InputCheckbox = styled.input`
  font-family: Roboto;
  margin-right: 6px;
  cursor: pointer;
`
export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const DivforInputs = styled.div`
  width: 170px;
  margin-top: 7px;
  margin-bottom: 7px;
`
export const UserPassword = styled.p`
  font-family: Roboto;
  font-size: 15px;
  width: 100%;
  margin-top: 14px;
  margin-bottom: 10px;
  text-align: center;
  color: #000000;
  border: 1px solid #000000;
  padding: 10px;
  border-radius: 3px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
export const GenerateButton = styled.button`
  color: #ffffff;
  font-family: Roboto;
  font-size: 15px;
  border-radius: 4px;
  width: 150px;
  height: 40px;
  margin: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #0099fa;
  @media screen and (min-width: 768px) {
    width: 250px;
    font-size: 17px;
  }
`
export const CopyButton = styled.button`
  color: #ffffff;
  font-family: Roboto;
  font-size: 15px;
  border-radius: 4px;
  width: 150px;
  height: 40px;
  margin: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #20b2aa;
  @media screen and (min-width: 768px) {
    width: 250px;
    font-size: 17px;
  }
`
export const MydivForRandom = styled.div`
  ${props => props.isDisplay && `display: none`}
`
export const WordsInputDiv = styled.input`
  font-family: Roboto;
  font-size: 15px;
  width: 100%;
  height: 45px;
  outline: none;
  border-radius: 4px;
  border: 1px solid #000000;
  color: #000000;
  padding-left: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  ${props => props.isShow && `display: none`}
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: Roboto;
  font-size: 17px;
`

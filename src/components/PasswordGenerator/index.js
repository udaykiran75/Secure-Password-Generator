import {Component} from 'react'
import {
  Bgcontainer,
  Heading,
  ParaText,
  FormContainer,
  Label,
  ContentDiv,
  ButtonsDiv,
  ButtonRandom,
  ButtonMemorable,
  LabelElnt,
  InputRange,
  SpanEl,
  RangeInputDiv,
  InputCheckbox,
  InputsContainer,
  DivforInputs,
  UserPassword,
  CopyButton,
  GenerateButton,
  MydivForRandom,
  WordsInputDiv,
  ErrorMsg,
} from './styledComponents'

const CapitalCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
const NumericalNumbers = '0123456789'
const SpeacialCharacters = '!@#$%^&*()_+|:?><."'

class PasswordGenerator extends Component {
  state = {
    randomChar: true,
    memorableWords: false,
    noOfCharectors: 15,
    isCapital: true,
    isLower: true,
    isNumbers: true,
    isSpeacial: true,
    displayPassword: false,
    generatedPassword: '',
    getMemorableWords: '',
    displayErrorMsg: false,
  }

  onClickedCopyBtn = () => {
    const {generatedPassword} = this.state
    if (generatedPassword === '') {
      alert('Please enter your memorable words')
    } else {
      // navigator.clipboard is the modern way to copy text
      navigator.clipboard
        .writeText(generatedPassword)
        .then(() => alert('Text copied to clipboard!'))
        .catch(() => alert('Failed to copy text'))
    }
  }

  onClickedGenerateBtn = () => {
    const {
      randomChar,
      noOfCharectors,
      isCapital,
      isLower,
      isNumbers,
      isSpeacial,
      getMemorableWords,
    } = this.state
    const charactersList = []

    if (randomChar) {
      if (isCapital) {
        charactersList.push(...CapitalCharacters)
      }
      if (isLower) {
        charactersList.push(...LowercaseCharacters)
      }
      if (isNumbers) {
        charactersList.push(...NumericalNumbers)
      }
      if (isSpeacial) {
        charactersList.push(...SpeacialCharacters)
      }

      let result = ''

      for (let i = 0; i <= noOfCharectors; i += 1) {
        const randomIndex = Math.floor(Math.random() * charactersList.length)
        const getRandomChar = charactersList[randomIndex]
        result += getRandomChar
      }
      this.setState({
        displayPassword: true,
        generatedPassword: result,
      })
    } else {
      let memorableResult = ''

      for (let i = 0; i <= getMemorableWords.length; i += 1) {
        const randomIndexNum = Math.floor(
          Math.random() * getMemorableWords.length,
        )
        const randomMemorableChar = getMemorableWords[randomIndexNum]
        memorableResult += randomMemorableChar
      }

      if (memorableResult === 'undefined') {
        this.setState({displayErrorMsg: true, displayPassword: false})
      } else {
        this.setState({
          displayPassword: true,
          displayErrorMsg: false,
          generatedPassword: memorableResult,
        })
      }
    }
  }

  onUpdateMemorableWords = event => {
    this.setState({getMemorableWords: event.target.value})
  }

  onCheckedCapital = () => {
    this.setState(prevState => ({isCapital: !prevState.isCapital}))
  }

  onCheckedLower = () => {
    this.setState(prevState => ({isLower: !prevState.isLower}))
  }

  onCheckedNumber = () => {
    this.setState(prevState => ({isNumbers: !prevState.isNumbers}))
  }

  onCheckedSpeacial = () => {
    this.setState(prevState => ({isSpeacial: !prevState.isSpeacial}))
  }

  onUpdateRandomCharValue = () => {
    this.setState(prevState => ({
      randomChar: !prevState.randomChar,
      memorableWords: !prevState.memorableWords,
      displayErrorMsg: false,
      displayPassword: false,
    }))
  }

  onUpdateMemorableWordValue = () => {
    this.setState(prevState => ({
      memorableWords: !prevState.memorableWords,
      randomChar: !prevState.randomChar,
      displayPassword: false,
    }))
  }

  onUpdateRangeValue = event => {
    this.setState({noOfCharectors: event.target.value})
  }

  render() {
    const {
      randomChar,
      memorableWords,
      noOfCharectors,
      isCapital,
      isLower,
      isNumbers,
      isSpeacial,
      displayPassword,
      getMemorableWords,
      generatedPassword,
      displayErrorMsg,
    } = this.state
    console.log(displayErrorMsg, generatedPassword)
    return (
      <Bgcontainer>
        <ContentDiv>
          <Heading>
            Strong. Secure. Awesome. Try our random password generator.
          </Heading>
          <ParaText>
            Create strong passwords that meet even the strictest security
            requirements. A powerful generator for powerful passwords to protect
            your online accounts.
          </ParaText>
        </ContentDiv>
        <FormContainer>
          <Label>Choose password type</Label>
          <ButtonsDiv>
            <ButtonRandom
              random={randomChar}
              onClick={this.onUpdateRandomCharValue}
            >
              Random Characters
            </ButtonRandom>
            <ButtonMemorable
              memorable={memorableWords}
              onClick={this.onUpdateMemorableWordValue}
            >
              Memorable Words
            </ButtonMemorable>
          </ButtonsDiv>
          <MydivForRandom isDisplay={memorableWords}>
            <Label>Customize your new password</Label>
            <RangeInputDiv>
              <LabelElnt htmlFor="inputrange">Number of characters</LabelElnt>
              <InputRange
                id="inputrange"
                type="range"
                max={50}
                min={8}
                value={noOfCharectors}
                onChange={this.onUpdateRangeValue}
              />
              <SpanEl>{noOfCharectors}</SpanEl>
            </RangeInputDiv>
            <InputsContainer>
              <DivforInputs>
                <InputCheckbox
                  type="checkbox"
                  id="capital-checkbox"
                  value={isCapital}
                  checked={isCapital}
                  onChange={this.onCheckedCapital}
                />
                <LabelElnt htmlFor="capital-checkbox">
                  Capital letters
                </LabelElnt>
              </DivforInputs>
              <DivforInputs>
                <InputCheckbox
                  type="checkbox"
                  id="small-checkbox"
                  value={isLower}
                  checked={isLower}
                  onChange={this.onCheckedLower}
                />
                <LabelElnt htmlFor="small-checkbox">
                  Lowercase letters
                </LabelElnt>
              </DivforInputs>
            </InputsContainer>
            <InputsContainer>
              <DivforInputs>
                <InputCheckbox
                  type="checkbox"
                  id="number-checkbox"
                  value={isNumbers}
                  checked={isNumbers}
                  onChange={this.onCheckedNumber}
                />
                <LabelElnt htmlFor="number-checkbox">Numbers</LabelElnt>
              </DivforInputs>
              <DivforInputs>
                <InputCheckbox
                  type="checkbox"
                  id="speacial-checkbox"
                  value={isSpeacial}
                  checked={isSpeacial}
                  onChange={this.onCheckedSpeacial}
                />
                <LabelElnt htmlFor="speacial-checkbox">
                  Speacial Characters
                </LabelElnt>
              </DivforInputs>
            </InputsContainer>
          </MydivForRandom>
          <WordsInputDiv
            isShow={randomChar}
            type="text"
            placeholder="Enter your memorable words here..."
            onChange={this.onUpdateMemorableWords}
            value={getMemorableWords}
          />
          <LabelElnt>Generated password</LabelElnt>
          <UserPassword>
            {displayPassword
              ? generatedPassword
              : 'Password will display here onece you generate!'}
          </UserPassword>
          {displayErrorMsg && (
            <ErrorMsg>*Please enter your memorable words</ErrorMsg>
          )}
          <CopyButton onClick={this.onClickedCopyBtn}>Copy password</CopyButton>
          <GenerateButton onClick={this.onClickedGenerateBtn}>
            Generate password
          </GenerateButton>
        </FormContainer>
      </Bgcontainer>
    )
  }
}
export default PasswordGenerator

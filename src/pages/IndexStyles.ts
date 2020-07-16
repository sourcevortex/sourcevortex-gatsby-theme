import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const StyledSocialContainer = styled.div`
  display: flex;
  margin-top: 30px;
`

export const StyledSocialIconBox = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: #111111;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333333;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
`
export const StyledParagraph = styled(Typography)``

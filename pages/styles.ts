import styled from 'styled-components'
import { themeUtils } from 'utils'

const footerHeight = themeUtils.spacing(12)

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${themeUtils.colors.secondary[900]};

  main {
    min-height: calc(100vh - ${footerHeight}px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${themeUtils.spacing(4)}px;
  }

  footer {
    min-height: ${footerHeight}px;
    border-top: ${themeUtils.spacing(0.25)}px solid ${themeUtils.colors.primary[50]};
    padding: ${themeUtils.spacing(2)}px;
  }
`
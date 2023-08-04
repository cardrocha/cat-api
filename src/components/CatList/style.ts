import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

import { Props } from './CatList'

export const GridContainer = styled.ul`
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
export const Button = styled.button<Omit<Props, 'title' | 'cats'>>`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 18px;
  padding: 4px 16px 4px 16px;
  border: 1px solid
    ${(props) =>
      props.variant === 'white' ? colors.secondary : colors.primary};
  color: ${(props) =>
    props.variant === 'white' ? colors.primary : colors.secondary};
  background-color: ${(props) =>
    props.variant === 'white' ? colors.secondary : colors.primary};
  border-radius: 4px;
`

export const Title = styled.h1<Omit<Props, 'title' | 'cats'>>`
  background-color: ${(props) =>
    props.variant === 'white' ? colors.nav : colors.secondaryNav};
  color: ${(props) =>
    props.variant === 'white' ? colors.secondary : colors.primary};
  padding: 8px;
  font-size: 36px;
  text-align: left;
  padding-left: 20px;
  margin-bottom: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (min-width: ${breakpoints.tablet}) {
    text-align: center;
    padding-left: 0;
  }

  @media (min-width: ${breakpoints.desktop}) {
    text-align: center;
    padding-left: 0;
  }
`

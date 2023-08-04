import styled from 'styled-components'
import { colors } from '../../../styles'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`
export const Button = styled.button`
  font-size: 18px;
  padding: px;
  font-weight: bold;
  border: 2px solid ${colors.border};
  background-color: ${colors.button};
  color: white;
  border-radius: 10px;
  width: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${colors.hover};
  }
`

export const ImgContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`

export const IconHeart = styled.img`
  display: none;
  position: absolute;
  top: 10px;
  right: 15px;
  width: 40px;

  &.is-visible {
    display: flex;
  }
`

import React from 'react'
import { Button, Container, IconHeart, ImgContainer } from './style'
import heart from '../../assets/heart.png'

type Props = {
  id?: number
  url: string
}

const CatBox = ({ url }: Props) => {
  const [curti, setCurti] = React.useState(false)

  return (
    <>
      <Container className="container">
        <IconHeart
          className={curti ? 'is-visible' : ''}
          src={heart}
          alt="Ícone de kornkun"
        />
        <ImgContainer src={url} alt="Fotos de gatos" />
        <Button onClick={() => setCurti(!curti)}>
          {curti ? 'deslike' : 'like'}
        </Button>
      </Container>
    </>
  )
}

export default CatBox

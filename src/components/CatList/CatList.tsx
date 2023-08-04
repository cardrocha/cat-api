import React from 'react'
import { CatList } from '../Home'
import CatBox from '../CatBox/CatBox'
import { Button, GridContainer, Title } from './style'

export type Props = {
  title: string
  cats: CatList[]
  variant?: 'white' | 'dark'
}

const CatListApi = ({ title, cats }: Props) => {
  const [dark, setDark] = React.useState(false)

  React.useEffect(() => {
    document.body.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div>
      <div>
        <div>
          <Title variant={`${dark ? 'dark' : 'white'}`}>{title}</Title>
          <Button
            variant={`${dark ? 'dark' : 'white'}`}
            onClick={() => setDark(!dark)}
          >
            {dark ? 'white' : 'dark'}
          </Button>
        </div>
        <GridContainer>
          {cats.map((cats) => (
            <CatBox key={cats.id} id={cats.id} url={cats.url} />
          ))}
        </GridContainer>
      </div>
    </div>
  )
}

export default CatListApi

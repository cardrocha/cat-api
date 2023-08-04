import React from 'react'
import CatListApi from './CatList/CatList'

export type CatList = {
  id: number
  url: string
  width: number
  height: number
}

const Home = () => {
  const [catList, setCatList] = React.useState<CatList[]>([])

  React.useEffect(() => {
    fetch(
      'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME'
    )
      .then((res) => res.json())
      .then((res) => setCatList(res))
  }, [])

  return (
    <div>
      <CatListApi cats={catList} title="Lista de Gatos" />
    </div>
  )
}

export default Home

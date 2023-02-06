import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getMovies,
  getMediumPictureUrl,
} from '../../../state/actions/moviesDucks'
import { Card } from '../../../components/common/card/card'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  padding: 3%;
`

const MoviesSpanish = () => {
  const dispatch = useDispatch()
  const data = useSelector((store) => store.moviesData.dataMovies)

  useEffect(() => {
    dispatch(getMovies('es-ES'))
  }, [])

  return (
    <Container>
      {data &&
        data.map((item) => {
          return (
            <Card
              title={item.original_title}
              imgUrl={getMediumPictureUrl(item.backdrop_path)}
              description={item.overview}
              date={item.release_date}
              language={item.original_language}
            />
          )
        })}
    </Container>
  )
}

export default MoviesSpanish

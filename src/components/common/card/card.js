import React from 'react'
import {
  CardWrapper,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  Text,
  CoverImg,
} from './CardStyles'

export const Card = ({ title, imgUrl, description, date ,language}) => {
  return (
    <CardWrapper>
      <CoverImg src={imgUrl} alt="Article Cover" />
      <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextBody>{description}</CardTextBody>
      </CardTextWrapper>
      <CardStatWrapper>
        <CardStats>
          <Text>{date}</Text>
        </CardStats>
        <CardStats>
          <Text>lenguaje original: {language}</Text>
        </CardStats>
      </CardStatWrapper>
    </CardWrapper>
  )
}

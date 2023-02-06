import styled from 'styled-components'

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
`

export const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: 'image' 'text' 'stats';
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  margin: 20px;
`

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  color: white;
`

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #5930e5;
`

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`

export const Text = styled.a`
  color: #fff;
  text-decoration: none;
`

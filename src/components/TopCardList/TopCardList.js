import React from 'react'
import Card from '../Card/Card'
import './TopCardList.css'
export default function TopCardList () {
  const cardListData = [
    {
      username: '@Example',
      id: 1,
      followers: '1987',
      todayFollowers: 12,
      icon: 'images/icon-facebook.svg',
      name: 'facebook'
    },
    {
      username: '@Example',
      id: 2,
      followers: '1044',
      todayFollowers: 99,
      icon: 'images/icon-twitter.svg',
      name: 'twitter'
    },
    {
      username: '@Example',
      id: 3,
      followers: '11k',
      todayFollowers: 1099,
      icon: 'images/icon-instagram.svg',
      name: 'instagram'
    },
    {
      username: '@Example',
      id: 4,
      followers: '8239',
      todayFollowers: -144,
      icon: 'images/icon-youtube.svg',
      name: 'youtube'
    }
  ]
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {
            cardListData.map((cardData) => <Card key={cardData.id} {...cardData} />)
          }
        </div>
      </div>
    </section>
  )
}

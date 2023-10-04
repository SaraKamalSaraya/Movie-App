import React from 'react'
import MovieCard from '../components/Wishlist_card/Wishlist_Card'
import Wishlist_Empty from '../components/Wishlist_card/Wishlist_Empty'

export default function WishList() {
  return (
    <div>
      <MovieCard
        id="tomb"
        title="Tomb Raider"
        year="2018"
        director="Roar Uthaug"
        duration="125"
        genre="Action, Fantasy"
        description="Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."
        imageURL="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"
      />
      <Wishlist_Empty/>
    </div>
  )
}

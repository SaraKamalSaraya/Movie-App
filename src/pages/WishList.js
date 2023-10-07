import React from "react";
import MovieCard from "../components/Wishlist_card/Wishlist_Card";
import Wishlist_Empty from "../components/Wishlist_card/Wishlist_Empty";
import { useSelector } from "react-redux";

export default function WishList() {
  const whatchListMovies = useSelector((state) => state.WatchListData.data);

  if (whatchListMovies.length === 0) {
    return (
      <Wishlist_Empty />
    );
  } else {
    return (
      <div className="" style={{ padding: '2% 7%' }}>
        <h3 className='text-black fw-bold mb-4'>My Watch List</h3>
      <MovieCard />
    </div>
    );
  }
}

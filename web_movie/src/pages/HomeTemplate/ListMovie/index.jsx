import React from "react";
import { useEffect } from "react";
import { fetchListMovie } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import Movie from "./Movie";

const ListMovie = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.listMovieReducer);

  useEffect(() => {
    dispatch(fetchListMovie());
  }, []);

  const renderListMovie = () => {
    const { data } = state;
    return data?.map((movie) => (
      <Movie key={movie.maPhim} data={movie}></Movie>
    ));
  };

  if (state.loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-4 gap-10 mt-25 ">
      {renderListMovie()}
    </div>
  );
};

export default ListMovie;

import React from "react";
import { NavLink,Link } from "react-router-dom";
const Movie = (props) => {
    const {data} = props;
  return (
    <div>
      <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs h-full min-h-[450px] flex flex-col">
  <a href="#">
    <img
      className="rounded-t-base w-full object-cover h-60"
      src={data.hinhAnh}
      alt={data.tenPhim}
    />
  </a>
  <div className="p-6 text-center flex flex-col flex-grow">
    <a href="#">
      <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
        {data.tenPhim}
      </h5>
    </a>

    <a>
        <h3 className="mt-3 mb-6 tracking-tight text-xl text-left">Bí danh: {data.biDanh}</h3>
    </a>

    <Link
      to={`/detail-movie/${data.maPhim}`}
      className="inline-block items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong 
                focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 
                focus:outline-none mt-auto text-center"
    >
      Detail
    </Link>
  </div>
</div>

    </div>
  );
};

export default Movie;

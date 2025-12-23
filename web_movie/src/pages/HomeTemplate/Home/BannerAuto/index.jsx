import React, { useEffect, useState } from "react";
import { fetchListBanner } from "./slice";
import { useDispatch, useSelector } from "react-redux";

const BannerAuto = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const banners = useSelector((state) => state.listBannerReducer.data);

  useEffect(() => {
    dispatch(fetchListBanner());
  }, [dispatch]);

  useEffect(() => {
    if (!banners || banners.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [banners]);

  if (!banners || banners.length === 0) return null;

  return (
    <div className="flex justify-center mt-6">
      {/* WRAPPER 70% */}
      <div className="relative w-[70%] h-[420px] overflow-hidden rounded-lg">
        {/* BACKGROUND BLUR */}
        <img
          src={banners[index].hinhAnh}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* SLIDER */}
        <div
          className="relative z-10 flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {banners.map((banner) => (
            <a
              key={banner.maBanner}
              href="#"
              className="min-w-full flex items-center justify-center"
            >
              <img
                src={banner.hinhAnh}
                alt="banner"
                className="max-h-full max-w-full object-contain"
              />
            </a>
          ))}
        </div>

        {/* Prev */}
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + banners.length) % banners.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex
        items-center justify-center bg-black/60 text-white text-2xl rounded-full
        z-20 hover:bg-black/80 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={() => setIndex((prev) => (prev + 1) % banners.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex
        items-center justify-center bg-black/60 text-white text-2xl rounded-full
        z-20 hover:bg-black/80 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {banners.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerAuto;

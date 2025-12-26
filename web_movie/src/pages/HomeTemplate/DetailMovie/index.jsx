import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailMovie } from "./slice";

const DetailMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.DetailMovieReducer
  );

  useEffect(() => {
    dispatch(fetchDetailMovie(id));
  }, [id, dispatch]);

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 text-black mt-25">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Poster */}
        <div>
          <img
            src={data.hinhAnh}
            alt={data.tenPhim}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Info */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            {data.tenPhim}
            {data.hot && (
              <span className="bg-red-600 text-sm px-2 py-1 rounded">
                HOT
              </span>
            )}
          </h1>

          <p className="text-gray-300">{data.moTa}</p>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Ngày khởi chiếu:</span>{" "}
              {new Date(data.ngayKhoiChieu).toLocaleDateString("vi-VN")}
            </p>

            <p>
              <span className="font-semibold">Đánh giá:</span>{" "}
              ⭐ {data.danhGia}/10
            </p>

            <p>
              <span className="font-semibold">Trạng thái:</span>{" "}
              {data.dangChieu
                ? "🎬 Đang chiếu"
                : data.sapChieu
                ? "⏳ Sắp chiếu"
                : "❌ Ngừng chiếu"}
            </p>
          </div>

          <a
            href={data.trailer}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium"
          >
            Xem trailer
          </a>
          
          <div>
            <Link to="/list-movie" className="inline-block bg-yellow-600 hover:bg-yellow-700 px-6 py-2 rounded-lg font-medium">Trở về</Link>
            <Link to="#" className="inline-block bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-medium ml-2">Đặt vé</Link>
          </div>
        </div>
      </div>

      {/* Trailer */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
        <div className="aspect-video">
          <iframe
            src={data.trailer.replace("watch?v=", "embed/")}
            title="Trailer"
            className="w-full h-full rounded-lg"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
export default DetailMovie;
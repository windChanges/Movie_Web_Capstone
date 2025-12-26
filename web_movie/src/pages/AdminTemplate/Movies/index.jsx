import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListMovie } from "../../HomeTemplate/ListMovie/slice";
import { FaEdit, FaTrash, FaCalendarAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const MoviesMana = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.listMovieReducer);

  useEffect(() => {
    dispatch(fetchListMovie());
  }, [dispatch]);

  if (loading) {
    return <p className="text-center py-10">Đang tải dữ liệu...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Quản lý phim</h2>

        <Link
          to="/admin/movies/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Thêm phim
        </Link>
      </div>

      {/* ===== SEARCH ===== */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Nhập tên phim..."
          className="flex-1 border px-4 py-2 rounded-l outline-none"
        />
        <button className="bg-blue-600 text-white px-4 rounded-r">
          <FaSearch />
        </button>
      </div>

      {/* ===== TABLE ===== */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-3 border">Mã phim</th>
              <th className="p-3 border">Hình ảnh</th>
              <th className="p-3 border">Tên phim</th>
              <th className="p-3 border text-left">Mô tả</th>
              <th className="p-3 border">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((movie) => (
              <tr key={movie.maPhim} className="text-sm hover:bg-gray-50">
                <td className="p-3 border text-center">{movie.maPhim}</td>

                <td className="p-3 border text-center">
                  <img
                    src={movie.hinhAnh}
                    alt={movie.tenPhim}
                    className="w-16 h-20 object-cover mx-auto rounded"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/100x150")
                    }
                  />
                </td>

                <td className="p-3 border font-medium">{movie.tenPhim}</td>

                <td className="p-3 border text-gray-600">
                  {movie.moTa?.length > 80
                    ? movie.moTa.slice(0, 80) + "..."
                    : movie.moTa}
                </td>

                <td className="p-3 border text-center">
                  <div className="flex justify-center gap-3 text-lg">
                    <Link
                      to={`/admin/movies/edit/${movie.maPhim}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit />
                    </Link>

                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>

                    <Link
                      to={`/admin/showtime/${movie.maPhim}`}
                      className="text-green-600 hover:text-green-800"
                    >
                      <FaCalendarAlt />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoviesMana;

import { useState } from "react";
import { authService } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state) => state.loginReducer
  );

  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authService(user));
  };

  // ===== REDIRECT THEO ROLE =====
  if (data?.accessToken) {
    if (data.maLoaiNguoiDung === "QuanTri") {
      return <Navigate to="/admin/dash-board" />;
    }
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-secondary-soft px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          Đăng nhập
        </h2>
        <p className="text-sm text-center mb-6">
          Đăng nhập để tiếp tục
        </p>

        {error && (
          <div className="mb-4 bg-danger-soft text-fg-danger-strong text-sm px-4 py-3 rounded">
            {error.response?.data?.content}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Tài khoản
            </label>
            <input
              name="taiKhoan"
              onChange={handleOnchange}
              className="w-full px-3 py-2.5 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Mật khẩu
            </label>
            <input
              type="password"
              name="matKhau"
              onChange={handleOnchange}
              className="w-full px-3 py-2.5 border rounded"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2.5 rounded hover:bg-blue-600 transition"
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        {/* ===== REGISTER LINK ===== */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Chưa có tài khoản?{" "}
          <Link
            to="/register"
            className="text-blue-500 font-medium hover:underline"
          >
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

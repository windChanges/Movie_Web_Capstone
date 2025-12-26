import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerService, resetRegister } from "./slice";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector(
    (state) => state.registerReducer
  );

  const [form, setForm] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    hoTen: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerService(form));
  };

  useEffect(() => {
    if (success) {
      dispatch(resetRegister());
      navigate("/login");
    }
  }, [success, dispatch, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-secondary-soft px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          Đăng ký tài khoản
        </h2>
        <p className="text-sm text-center mb-6">
          Tạo tài khoản mới
        </p>

        {error && (
          <div className="mb-4 bg-danger-soft text-fg-danger-strong text-sm px-4 py-3 rounded">
            {error.response?.data?.content}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="taiKhoan"
            placeholder="Tài khoản"
            onChange={handleChange}
            className="w-full px-3 py-2.5 border rounded"
          />

          <input
            type="password"
            name="matKhau"
            placeholder="Mật khẩu"
            onChange={handleChange}
            className="w-full px-3 py-2.5 border rounded"
          />

          <input
            name="hoTen"
            placeholder="Họ tên"
            onChange={handleChange}
            className="w-full px-3 py-2.5 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-3 py-2.5 border rounded"
          />

          <input
            name="soDt"
            placeholder="Số điện thoại"
            onChange={handleChange}
            className="w-full px-3 py-2.5 border rounded"
          />

          <button
            disabled={loading}
            className="w-full bg-green-500 text-white py-2.5 rounded hover:bg-green-600 transition"
          >
            {loading ? "Đang đăng ký..." : "Đăng ký"}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Đã có tài khoản?{" "}
          <Link
            to="/login"
            className="text-blue-500 font-medium hover:underline"
          >
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

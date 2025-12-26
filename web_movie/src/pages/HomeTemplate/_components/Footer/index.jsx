import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* ===== GIỚI THIỆU ===== */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            MovieTicket
          </h3>
          <p className="text-sm leading-relaxed">
            MovieTicket là nền tảng đặt vé xem phim trực tuyến nhanh chóng,
            tiện lợi với nhiều ưu đãi hấp dẫn mỗi ngày.
          </p>
        </div>

        {/* ===== LIÊN KẾT ===== */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Liên kết
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Trang chủ</li>
            <li className="hover:text-white cursor-pointer">Lịch chiếu</li>
            <li className="hover:text-white cursor-pointer">Tin tức</li>
            <li className="hover:text-white cursor-pointer">Liên hệ</li>
          </ul>
        </div>

        {/* ===== HỆ THỐNG RẠP ===== */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Hệ thống rạp
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white">CGV</li>
            <li className="hover:text-white">Galaxy Cinema</li>
            <li className="hover:text-white">Lotte Cinema</li>
            <li className="hover:text-white">BHD Star</li>
          </ul>
        </div>

        {/* ===== MẠNG XÃ HỘI ===== */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Kết nối với chúng tôi
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MovieTicket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import ListTheater from "./listTheater";
import TheaterComplex from "./theaterComplex";
const TheaterPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        Hệ thống rạp
      </h2>

      {/* ===== HÀNG TRÊN: HỆ THỐNG RẠP ===== */}
      <div className="mb-8">
        <ListTheater />
      </div>

      {/* ===== DÒNG NGĂN CÁCH ===== */}
      <div className="border-t my-6"></div>

      {/* ===== BÊN DƯỚI: CỤM RẠP ===== */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Cụm rạp
        </h3>
        <TheaterComplex />
      </div>
    </div>
  );
};

export default TheaterPage;

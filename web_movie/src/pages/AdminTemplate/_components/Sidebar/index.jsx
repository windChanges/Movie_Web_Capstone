import { NavLink } from "react-router-dom";
import { FaTicketAlt, FaFilm, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const menu = [
     {
      name: "Quản lý phim",
      path: "/admin",
      icon: <FaFilm />,
    },
    {
      name: "Quản lý đặt vé",
      path: "/admin/booking",
      icon: <FaTicketAlt />,
    },
    {
      name: "Quản lý người dùng",
      path: "/admin/users",
      icon: <FaUsers />,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white fixed left-0 top-0">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center text-xl font-bold border-b border-gray-700">
        🎬 ADMIN
      </div>

      {/* Menu */}
      <nav className="mt-4">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/admin"} // ⭐ CHỈ DÒNG NÀY
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 transition
               hover:bg-gray-700
               ${isActive ? "bg-gray-700 text-yellow-400" : ""}`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

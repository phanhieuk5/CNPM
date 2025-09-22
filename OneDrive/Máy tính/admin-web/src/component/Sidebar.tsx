import {
  Bold,
  BoltIcon,
  MessageCircle,
  User,
  Home,
  CalendarDays,
  Eye,
  Map,
  GraduationCap,
} from "lucide-react";
export default function Sidebar() {
  return (
    <aside className="w-1/5 min-h-screen bg-white shadow-lg flex flex-col border-r border-gray-200">
      <nav className="flex-1 p-10 text-gray-700">
        <ul className="text-black font-bold space-y-2 ">
          <li className="flex space-x-2 hover:bg-gray-500 p-3 rounded-md">
            <Home />
            <a href="/">Tổng quan</a>
          </li>
          <li className="flex space-x-2 hover:bg-gray-500 p-3 rounded-md">
            <GraduationCap />
            <a href="/student">Học sinh</a>
          </li>
          <li className="flex space-x-2 hover:bg-gray-500 p-3 rounded-md">
            <User />
            <a href="/driver">Tài xế</a>
          </li>
          <li className="flex space-x-2 hover:bg-gray-500 p-3 rounded-md">
            <Map />
            <a href="/route">Tuyến đường</a>
          </li>
          <li className="flex space-x-2 hover:bg-gray-500 p-3 rounded-md">
            <CalendarDays />
            <a href="/schedule">Lịch trình</a>
          </li>
          <li className="flex space-x-2 hover:bg-gray-500 p-3 rounded-md">
            <Eye />
            <a href="/follow">Theo dõi</a>
          </li>
          <li className="flex space-x-2 hover:bg-gray-500 p-3 rounded-md">
            <MessageCircle />
            <a href="/message">Tin nhắn</a>
          </li>
          <li className="flex space-x-2 hover:bg-gray-500 p-3 rounded-md">
            <BoltIcon />
            <a href="/setting">Cài đặt</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

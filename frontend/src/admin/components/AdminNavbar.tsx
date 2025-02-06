
import { useAuth } from '../../context/AuthContext';

const AdminNavbar = () => {
  const { logout, user } = useAuth();

  return (
    <nav className="bg-gray-800 text-white flex justify-between px-6 py-3">
      <span className="font-bold">Admin Panel</span>
      <div>
        <span className="mr-4">Welcome, {user?.username || 'Admin'}</span>
        <button
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
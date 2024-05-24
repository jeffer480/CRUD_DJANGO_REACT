import { Link } from "react-router-dom";

export function Navigation({ isLoggedIn, username, onLogout }) {
  return (
    <div className="flex justify-between py-3">
      <Link to='/tasks'>
        <div className="font-bold text-lg">App Web Tareas CRUD</div>
      </Link>
      <div className="flex items-center">
        {isLoggedIn && (
          <div className="mr-4">¡Hola, {username}!</div>
        )}
        {isLoggedIn ? (
          <button className="bg-red-500 px-4 py-1 rounded-lg" onClick={onLogout}>
            Cerrar sesión
          </button>
        ) : (
          <Link to='/login'>
            <button className="bg-indigo-500 px-4 py-1 rounded-lg">
              Iniciar sesión
            </button>
          </Link>
        )}
      </div>
      <button className="bg-indigo-500 px-4 py-1 rounded-lg">
        <Link to='/tasks-create'>Create Task</Link>
      </button>
    </div>
  );
}

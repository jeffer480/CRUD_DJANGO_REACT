import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to='/tasks'>
        <div className="font-bold text-lg">App Web Tareas CRUD</div>
      </Link>
      <button className="bg-indigo-500 px-4 py-1 rounded-lg">
        <Link to='/tasks-create'>Create Task</Link>
      </button>
    </div>
  )
}
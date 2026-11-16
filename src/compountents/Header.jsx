import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full overflow-auto flex justify-center bg-green-900 text-white ">
        <div className="container flex  justify-between text-2xl py-5 ">
            <h1> logo </h1>
            <nav className="flex gap-10">
                <Link to="/" > Home </Link>
                <Link to="AdminPage" > Admin  </Link>
            </nav>
        </div>
    </div>
  )
}

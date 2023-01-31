import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/form-list'>Form List</Link>
                </li>
            </ul>
        </nav>
    )
}
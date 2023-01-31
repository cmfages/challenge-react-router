import Form from "../components/Form";
import Menu from "../components/Menu";

export default function Home() {
    return (
        <div className="home-container">
            <Menu />
            <h1>Home</h1>
            <Form />
        </div>
    )
}
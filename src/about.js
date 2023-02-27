import { Link, Outlet } from "react-router-dom";

export default function About() {
    return (
    <>
        <h1>About</h1>
        <p>Info lebih lanjut silahkan kilk link dibawah</p>
        <ul>
            <li><Link to='/about/team'>Team</Link></li>
        </ul>
        <Outlet />
    </>
    );
}
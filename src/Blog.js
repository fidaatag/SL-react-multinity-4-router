import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <ul>
                <li>
                    <Link to='Artikel-1'>Artikel 1</Link>
                </li>
                <li>
                    <Link to='Artikel-2'>Artikel 2</Link>
                </li>
                <li>
                    <Link to='Artikel-3'>Artikel 3</Link>
                </li>
            </ul>
        </>
    );
}
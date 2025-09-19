import { Link } from "react-router-dom";
import '../BookDetail/NotFound.css';

export default function NotFound() {
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 — Page Not Found</h1>
      <p>Sorry, we could not find that page.</p>
      <p><Link to="/" className="btn">Go back home</Link></p>
    </section>
  );
}

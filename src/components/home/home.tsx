import './home.css'
import { Link } from 'react-router-dom';


export default function Home(){
    return (
        <div className="container">
          <header>
            <h1 className="site-title">The bookshelf</h1>
          </header>
          <p className='welcome-message'>Your cozy corner for books you love, and the ones you are about to discover. Browse the shelves, add your favorites, and keep reading.</p>
            <Link to="/books" className="start-up-button">See our books</Link>
        </div>
    );
};
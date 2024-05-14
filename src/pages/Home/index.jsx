import './home.css';
import Banner from '../../components/Banner/index.jsx';
import Gallery from '../../components/Gallery/index.jsx';
import Features from '../../components/Features/index.jsx';

function Home() {
    return (
        <div className="home">
            <Banner />
            <Gallery />
            <Features />
        </div>
    );
}

export default Home;

import './home.css';
import Banner from '../../components/Banner/index.jsx';
import TimeLine from '../../components/Timeline/index.jsx';
//import Gallery from '../../components/Gallery/index.jsx';
//import Features from '../../components/Features/index.jsx';
import SkillBar from '../../components/SkillBar/index.jsx';
import Carousel from '../../components/Carousel/index.jsx';
import LoadPage from '../../components/LoadPage/index.jsx';

function Home() {
    return (
        <div className="home">
            <LoadPage />
            <Banner />
            <Carousel />
            <TimeLine />
            <div className="container-skillbar">
                <h3 className= "titre-bar-moyennes">Moyennes d'utilisation des technologies sur l'ensemble des projets</h3>
                <SkillBar skillName="HTML" percentage={11.95} />
                <SkillBar skillName="CSS" percentage={23.92} />
                <SkillBar skillName="Sass" percentage={5.59} />
                <SkillBar skillName="JavaScript" percentage={58.54} />
            </div>
        </div>
    );
}

export default Home;

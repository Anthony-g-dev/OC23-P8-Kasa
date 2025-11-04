import { Link } from 'react-router-dom';
import { Banner } from '../components/Banners';
import { Header } from '../components/Header';
import { Card } from '../components/Cards';
import { Footer } from '../components/Footer';

import logements from "/src/data/logements.json";

export function Home() {
  return <>
    <Header/>
    <main className="homePage">
      <Banner className="homeBanner" image="./img/banner_1.png" gradientOpacity={0.6}>Chez vous, <wbr/>partout et ailleurs</Banner>
      <div className="cardContainer">
        {logements.map((logement) => (
          <Link to={`/accomodation/${logement.id}`} state={{logement: logement}} key={logement.id}>
            <Card image={logement.cover}>{logement.title}</Card>
          </Link>
        ))}
      </div>
    </main>
    <Footer/>
  </>
}
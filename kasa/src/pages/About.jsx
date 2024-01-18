import { Header } from '../components/Header';
import { Banner } from '../components/Banners';
import { Accordion } from '../components/Accordions';
import { Footer } from '../components/Footer';

export function About() {
  const values = [
    {title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équpes."},
    {title: "Respect", content: "La bienvaillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."},
    {title: "Service", content: "La bienvaillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."},
    {title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."},
  ]

  return <>
    <Header/>
    <main className="aboutPage">
      <Banner image="./img/banner_2.png"></Banner>
      <div className="valuesContainer">
        {values.map((value) => (
          <Accordion title={value.title}>{value.content}</Accordion>
        ))}
      </div>
    </main>
    <Footer/>
  </>
}
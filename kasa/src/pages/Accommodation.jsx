import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useLocation, useParams } from "react-router-dom"
import { Tag } from "../components/Tags";
import { Carrousel } from "../components/Carrousel";
import { Accordion } from "../components/Accordions";
import { Stars } from "../components/Stars";
import { useEffect, useState } from "react";

export function Accomodation() {
  const params = useParams();
  const stateLogement = useLocation().state?.logement
  const [logement, setLogement] = useState(stateLogement);

  useEffect(() => {
    if (stateLogement == undefined) {
      fetch("/src/data/logements.json").then(res => res.json()).then((data) => {
        setLogement(data.find((logement) => logement.id === params.id));
      })
    }
  }, [stateLogement]);

  // Si logement est undefined, afficher un message de chargement
  if (logement == undefined) {
    return <p>Chargement...</p>;
  }

  // Sinon, retourner le composant avec les données de logement
  let logementHostName = logement.host.name.split(" ");

  return (
    <>
      <Header />
      <main className="accommodationPage">
        <Carrousel images={logement.pictures} />
        <div className="accommodationInfo">
          <div className="accommodationInfo__texts">
            <div className="accommodationInfo__main">
                <h1 className="accommodationInfo__title">{logement.title}</h1>
                <h2 className="accommodationInfo__location">{logement.location}</h2>
                <div className="tagsContainer">
                {logement.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
                </div>
            </div>
            <div className="accommodationInfo__secondary">
                <div className="accommodationInfo__hostInfo">
                <span className="accommodationInfo__hostName">{logementHostName[0]} <br/> {logementHostName[1]}</span>
                <img src={logement.host.picture} alt={logement.host.name} height="128px" width="128px" className="accommodationInfo__hostPicture" />
                </div>
                <Stars count={logement.rating} />
            </div>
          </div>
          <div className="accordionsContainer">
            <Accordion title="Description">{logement.description}</Accordion>
            <Accordion title="Equipements">
              <ul>
                {logement.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

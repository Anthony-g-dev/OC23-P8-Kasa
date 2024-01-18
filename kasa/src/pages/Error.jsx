import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Error() {
    return <>
        <Header/>
        <main>
            <div className="error">
                <h1 className="error__title">404</h1>
                <p className="error__description">Oups! La page que vous demandez n'existe pas.</p>
                <Link className="error__link" to="/">Retourner sur la page d’accueil</Link>
            </div>
        </main>
        <Footer/>
    </>
}
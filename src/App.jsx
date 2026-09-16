import { phone, links } from "./links";
import { iconMap, Phone, Chevron, Scooter } from "./Icons";
import "./App.css";

function LinkRow({ item }) {
  const Icon = iconMap[item.icon];
  return (
    <a className="row" href={item.url} target="_blank" rel="noopener noreferrer">
      <span className={`icn ${item.brand ? "brand" : "navy"}`}>
        <Icon />
      </span>
      <span className="body">
        <span className="t1">{item.title}</span>
        <span className="t2">{item.subtitle}</span>
      </span>
      <span className="chev">
        <Chevron />
      </span>
    </a>
  );
}

export default function App() {
  return (
    <div className="stage">
      <div className="side">
        <div className="side-mark">
          <img src="/logo.png" alt="Logo Allo..Ala" />
        </div>
        <div className="big">
          <span className="a1">Allo..</span>
          <span className="a2">Ala</span>
        </div>
        <p>
          Un coup de fil, et le reste nous regarde. Livraison, commandes et
          services, à Sbeïtla et alentours.
        </p>
        <div className="ar">
          <span>كلمني</span> ... نفضهالك
        </div>
      </div>

      <div className="phone">
        <header className="hero">
          <svg className="signal" viewBox="0 0 360 200" aria-hidden="true">
            <path d="M 60 150 A 150 150 0 0 1 300 150" />
            <path d="M 90 150 A 120 120 0 0 1 270 150" />
            <path d="M 120 150 A 90 90 0 0 1 240 150" />
          </svg>

          <div className="scooter-lane" aria-hidden="true">
            <div className="scooter scooter-1">
              <Scooter />
            </div>
            <div className="scooter scooter-2">
              <Scooter />
            </div>
          </div>

          <div className="mark">
            <img src="/logo.png" alt="Logo Allo..Ala" />
          </div>

          <h1 className="wordmark">
            <span className="a1">Allo..</span>
            <span className="a2">Ala</span>
          </h1>

          <svg className="sweep" viewBox="0 0 150 14" aria-hidden="true">
            <defs>
              <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0E2A5C" />
                <stop offset="100%" stopColor="#EF6C1C" />
              </linearGradient>
            </defs>
            <path className="track" d="M4 7 H130" />
            <path
              className="track"
              d="M120 2 L134 7 L120 12"
              style={{ stroke: "#EF6C1C", fill: "none" }}
            />
          </svg>

          <p className="tagline-ar">
            <span className="k1">كلمني</span> ...{" "}
            <span className="k2">نفضهالك</span>
          </p>
          <p className="tagline-fr">
            Votre service livraison &amp; commandes, à Sbeïtla — sur simple
            appel.
          </p>
        </header>

        <a className="call" href={`tel:${phone.tel}`}>
          <span className="icn">
            <Phone />
          </span>
          <span className="txt">
            <span className="l1">Appelez pour commander</span>
            <span className="l2">Réponse rapide, tous les jours</span>
          </span>
          <span className="num">{phone.display}</span>
        </a>

        <p className="section-label">NOS PLATEFORMES</p>
        <nav className="card">
          {links.map((item) => (
            <LinkRow key={item.id} item={item} />
          ))}
        </nav>

        <footer>
          Sbeïtla, Tunisie · © {new Date().getFullYear()} Allo..Ala
          <br />
          Tous droits réservés.
        </footer>
      </div>
    </div>
  );
}

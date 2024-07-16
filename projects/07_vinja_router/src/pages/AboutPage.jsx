import React from "react";
import { Link } from "../components/Link";

const i18n = {
  es: {
    title: "Acerca de",
    name: "Vinja",
    alt: "Avatar de Vinja",
    home: "Inicio",
  },
  en: {
    title: "About",
    name: "Vinja",
    alt: "Avatar of Vinja",
    home: "Home",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

const AboutPage = ({ routeParams }) => {
  const i18n = useI18n(routeParams.lang);
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src="https://unavatar.io/x/vinjatovix" alt="Avatar of Vinja" />
        <p>{i18n.name}</p>
      </div>
      <Link to="/">{i18n.home}</Link>
    </>
  );
};

export default AboutPage;

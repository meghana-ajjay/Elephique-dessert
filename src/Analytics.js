import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-X4GX2RP3JM");
};

export const trackPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};

export default ReactGA;
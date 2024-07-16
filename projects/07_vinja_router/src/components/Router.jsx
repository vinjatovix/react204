import { useState, useEffect, Children } from "react";
import { match } from "path-to-regexp";
import PropTypes from "prop-types";

import { EVENTS } from "../constants/consts";
import { getCurrentPath } from "../utils/getCurrentPath";

export const Router = ({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) => {
  const [route, setRoute] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setRoute(getCurrentPath());
    };

    window.addEventListener(EVENTS.PUSH_STATE, onLocationChange);
    window.addEventListener(EVENTS.POP_STATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSH_STATE, onLocationChange);
      window.removeEventListener(EVENTS.POP_STATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === "Route";

    return isRoute ? props : null;
  });

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

  const Page = routesToUse.find(({ path }) => {
    if (path === route) return true;

    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(route);
    if (!matched) return false;

    routeParams = matched.params;
    return true;
  })?.Component;

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
};

Router.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      Component: PropTypes.elementType.isRequired,
    })
  ),
  defaultComponent: PropTypes.elementType,
};

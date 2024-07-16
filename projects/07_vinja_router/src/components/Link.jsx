import { BUTTONS, EVENTS } from "../constants/consts";

export const navigate = (href) => {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSH_STATE);
  window.dispatchEvent(navigationEvent);
};

export const Link = ({ target, to, ...props }) => {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.MAIN;
    const isModifiedEvent =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
};

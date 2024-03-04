import { Component, define } from "@kickstartds/core/lib/component";

export const identifier = "dsa.disclaimer";

const storageKey = "hide_disclaimer";

export default class Disclaimer extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    const box = element.querySelector(".l-section");
    const dismissBtn = box.querySelector(".c-button-group button");
    const showBtn = element.querySelector(".dsa-disclaimer__show-button");

    const toggle = () => {
      if (sessionStorage.getItem(storageKey)) {
        box.setAttribute("hidden", "");
        showBtn.removeAttribute("hidden");
      } else {
        box.removeAttribute("hidden");
        showBtn.setAttribute("hidden", "");
      }
    };

    if (dismissBtn) {
      const handleDismiss = () => {
        sessionStorage.setItem(storageKey, "true");
        toggle();
      };
      dismissBtn.addEventListener("click", handleDismiss);
      this.onDisconnect(() => {
        dismissBtn.removeEventListener("click", handleDismiss);
      });
    }
    if (showBtn) {
      const handleShow = () => {
        sessionStorage.removeItem(storageKey);
        toggle();
      };
      showBtn.addEventListener("click", handleShow);
      this.onDisconnect(() => {
        showBtn.removeEventListener("click", handleShow);
      });
    }

    toggle();
  }
}

define(identifier, Disclaimer);

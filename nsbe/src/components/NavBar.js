import React from "react";
import ChangeLanguage from "./ChangeLanguage";
import { withTranslation } from "react-i18next";

const NavBar = (props) => {
    const {t} = props

    return (
        <nav>
        <div className="logo" />
        <ul class="list-item">
            <li><a href="/">{t("Home")}</a></li>
            <li><a href="/selection">{t("Home")}</a></li>
        </ul>
      </nav>
    );
};

export default withTranslation()(NavBar);
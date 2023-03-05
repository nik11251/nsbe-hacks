import React from "react";
import ChangeLanguage from "./ChangeLanguage";
import { withTranslation } from "react-i18next";

const NavBar = (props) => {
    const {t} = props

    return (
        <nav>
        <div className="logo" />
        <ul class="list-item">
            <li><a href="/nsbe-hacks">{t("Home")}</a></li>
            <li><a href="/nsbe-hacks/login">{t("login")}</a></li>
            <li><a href="/nsbe-hacks/signup">{t("sign up")}</a></li>
            <li><ChangeLanguage/></li>
        </ul>
      </nav>
    );
};

export default withTranslation()(NavBar);
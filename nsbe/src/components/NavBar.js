import React from "react";
import ChangeLanguage from "./ChangeLanguage";
import { withTranslation } from "react-i18next";
import "./NavBar.css"
import useToken from "../hooks/useToken";

const NavBar = (props) => {
    const {t, token} = props

    return (
        <nav>
            <ul className="list-item">
                <li><a href="/nsbe-hacks">{t("Home")}</a></li>
                <li><a href="/nsbe-hacks/login">{t("login")}</a></li>
                <li><a href="/nsbe-hacks/signup">{t("sign up")}</a></li>
                <li><a href="/nsbe-hacks/video2">{t("video2")}</a></li>
                <li><a href="/nsbe-hacks/video">{t("video")}</a></li>
                <li>I am {token}</li>
            </ul>
        </nav>
    );
};

export default withTranslation()(NavBar);

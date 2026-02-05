import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './style.module.css';

type MenuButtonPropsType = {
    menuOpen: boolean;
    toggleMenu: () => void;
}
export default function MenuButton({ menuOpen, toggleMenu }: MenuButtonPropsType) {
    const { t } = useTranslation(['header']);

    return (
        <button
            type="button"
            className={ style.menuBtn }
            onClick={ toggleMenu }
            aria-label={ t('toggleMenu') }
            aria-expanded={ menuOpen }
        >
            <span className={ `${style.menuBtnBurger} ${menuOpen && style.menuBtnBurgerOpen}` }></span>
        </button>
    );
}

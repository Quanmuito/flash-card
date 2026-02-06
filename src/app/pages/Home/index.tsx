import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import style from './style.module.css';

export default function HomePage() {
    const { t } = useTranslation(['header']);
    const email = "flashcard2026@gmail.com";

    return (
        <div className={ style.container }>
            <h1>{ t('home') }</h1>

            <div className={ style.detailContainer }>
                <h3>{ t('slogan') }</h3>
                <br />
                <br />

                <h2>{ t('about') }</h2>
                <br />
                <p>{ t('aboutDescription') }</p>
                <p>{ t('aboutDescription2') }</p>
                <p>{ t('aboutDescription3') }<strong>{ email }</strong></p>
                <br />
                <br />

                <h2>{ t('howToUse') }</h2>
                <br />
                <ol className={ style.stepsList }>
                    <li>{ t('step1') }</li>
                    <li>{ t('step2') }</li>
                    <li>{ t('step3') }</li>
                    <li>{ t('step4') }</li>
                    <li>{ t('step5') }</li>
                    <li>{ t('step6') }</li>
                </ol>

                <br />
                <br />
                <Link to="/practice">{ t('startPractice') }</Link>
            </div>
        </div>
    );
}

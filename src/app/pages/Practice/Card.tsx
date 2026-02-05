import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Word } from 'types';
import style from './style.module.css';

interface CardProps {
    word: Word;
}

export default function Card({ word }: CardProps) {
    const [show, setShow] = useState(false);
    const { t } = useTranslation(['header']);

    useEffect(() => {
        setShow(false);
    }, [word]);

    const details = [
        { label: t('meaning'), value: word.tarkoittaa },
        { label: t('vartalo'), value: word.vartalo },
        { label: t('imperfektiPositiivinen'), value: word.imperfekti.positiivinen },
        { label: t('imperfektiNegatiivinen'), value: word.imperfekti.negatiivinen },
        { label: t('passiiviPositiivinen'), value: word.passiivi.positiivinen },
        { label: t('passiiviNegatiivinen'), value: word.passiivi.negatiivinen },
    ];

    return (
        <>
            <div className={ style.wordContainer }>
                <div className={ style.word }>
                    <h2>{ word.sana }</h2>
                </div>
            </div>

            <div className={ style.detailContainer }>
                { !show ? (
                    <button onClick={ () => setShow(!show) }>{ t('show') }</button>
                ) : (
                    <div className={ style.detailContent }>
                        { details.map((detail, index) => (
                            <p key={ index } className={ style.detailItem }>
                                <span className={ style.detailLabel }>{ detail.label }:</span> { detail.value }
                            </p>
                        )) }
                    </div>
                ) }
            </div>
        </>
    );
}

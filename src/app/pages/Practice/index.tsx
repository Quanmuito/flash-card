import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getListOfWords } from 'libs/utils';
import { Word } from 'types';
import Card from './Card';
import style from './style.module.css';

export default function PracticePage() {
    const { t } = useTranslation(['header']);
    const [words, setWords] = useState<Word[]>(getListOfWords());
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleNewSet = () => {
        setWords(getListOfWords());
        setCurrentIndex(0);
    };

    const isFirst = currentIndex === 0;
    const isLast = currentIndex === words.length - 1;

    return (
        <div className={ style.container }>
            <h1>{ t('practice') }</h1>

            <div className={ style.actionContainer }>
                <button onClick={ handlePrevious } disabled={ isFirst }>{ t('previous') }</button>
                <button onClick={ handleNewSet }>{ t('newSet') }</button>
                <button onClick={ handleNext } disabled={ isLast }>{ t('next') }</button>
            </div>

            <Card word={ words[currentIndex] } />
        </div>
    );
}

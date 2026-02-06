import verbitData from '../data/verbit.json';
import verbit2Data from '../data/verbit2.json';
import { Word } from '../types';

export function getListOfWords(): Word[] {
    const merged = [...verbitData, ...verbit2Data];
    const shuffled = merged.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
}

import verbitData from '../data/verbit.json';
import { Word } from '../types';

export function getListOfWords(): Word[] {
    const shuffled = [...verbitData].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
}

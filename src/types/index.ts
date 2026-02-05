import { RefObject } from 'react';

export type AppState = {
};

export type NodeRefObjectType = {
    id: number,
    ref: RefObject<HTMLSpanElement>,
};

export type Word = {
    sana: string;
    tarkoittaa: string;
    vartalo: string;
    imperfekti: {
        positiivinen: string;
        negatiivinen: string;
    };
    passiivi: {
        positiivinen: string;
        negatiivinen: string;
    };
};
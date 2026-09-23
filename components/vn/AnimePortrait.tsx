'use client';
import React from 'react';
import Image from 'next/image';
import {CHARACTERS} from '@/lib/storyData';
import {CharacterId} from '@/types/game';
interface AnimePortraitProps{
    characterId:CharacterId;
    expression?:'neutral'|'shocked'|'determined'|'pensive';
}
export const AnimePortrait:React.FC<AnimePortraitProps>=({characterId, expression})=>{
    const char=CHARACTERS[characterId];
    if (!char) return null;
    return(
        <div className="relative w-64 h-96 transition-all duration-500 transform hover: scale-105">
            <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 animate-pulse" style={{backgroundColor:char.themeColor}}/>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 vorder-amber-400/50 bg-slate-900/80 shadow-2xl">
                <Image src={char.portraitUrl} alt={char.name} fill className="object-cover object-top filter brightness-105 contrast-110"/>
                {expression&&(
                <div className="absolute top-3 right-3 bg-slate-950/80 border border-amber-400/40 backdrop-blue-md px-2.5 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest text-amber-300">
                    {expression}
                </div>
                )}
                <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">{char.role}</p>
                </div>
            </div>
        </div>
    )
}
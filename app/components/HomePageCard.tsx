import React from "react";
import { PremiumButton } from "./PremiumButton";

interface HomePageCardProps {
    className?: string;
    title?: string;
    step?: number;
}

export interface StepContent {
    subtitle: string;
    text: string;
    link?: string;
    localisation?: string;
}

const sections: StepContent[] = [
    {
        subtitle: "1 - Près de chez vous",
        text: "Découvrez les clubs de plongée locaux, leurs offres et événements à venir.",
        localisation: "France -  Cote d'Azur ",
        link: "#discover",
    },
    {
        subtitle: "2 - Matériel nécessaire",
        text: "Explorez notre guide complet du matériel de plongée pour débutants et experts.",
        localisation: "France -  Plongée Subaquatique Bordeaux",
        link: "#explore",
    },
    {
        subtitle: "3 - Vous inscrire chez nos partenaires",
        text: "Rejoignez nos clubs partenaires et profitez d'avantages exclusifs.",
        localisation: "France - Club de plongée de Marseille",
        link: "#signup",
    },
];

export const HomePageCard: React.FC<HomePageCardProps> = ({
    className = "",
    title = "Votre aventure commence ici",
    step
}) => {
    return (
        <div
            className={`text-white h-[500px] flex flex-col animate-fade-in ${className}`}
        >
            <div className="text-center">
                <p className="flex items-center justify-center gap-3 text-sm text-slate-100/90 leading-relaxed">
                    <span className="flex h-4 w-6 overflow-hidden rounded-[3px] shadow-sm">
                        <span className="h-full w-1/3 bg-[#0055A4]" />
                        <span className="h-full w-1/3 bg-white" />
                        <span className="h-full w-1/3 bg-[#EF4135]" />
                    </span>
                    {sections[step || 0].localisation}
                </p>
                <h2 className="text-7xl font-semibold text-center">
                    {title}
                </h2>
            </div>
            <div className="mt-auto mx-auto flex w-50  overflow-hidden text-xs font-medium uppercase tracking-[0.18em] text-center rounded-lg cursor-pointer">
                <div className="flex w-50 items-center justify-center p-2 text-white/80 hover:text-white transition-colors">
                    Highlight
                </div>
                <div className="flex w-50 items-center justify-center p-2 text-white/80 hover:text-white transition-colors border-l border-white/20">
                    Découvrir
                </div>
                {/**sections[step || 0] && (
                    <section className="space-y-2">
                        <h3 className="text-lg font-medium">{sections[step || 0].subtitle}</h3>
                        <p className="text-sm text-slate-100/90 leading-relaxed">
                            {sections[step || 0].text}
                        </p>
                       {/**  {sections[step || 0].link && (
                            <PremiumButton href={sections[step || 0].link} className="mt-4">
                                En savoir plus
                            </PremiumButton>
                        )} }
                    </section>
                ) */}
            </div>
        </div>
    );
};

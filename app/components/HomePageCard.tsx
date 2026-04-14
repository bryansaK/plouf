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
}

const sections: StepContent[] = [
    {
        subtitle: "1 - Près de chez vous",
        text: "Découvrez les clubs de plongée locaux, leurs offres et événements à venir.",
        link: "#discover",
    },
    {
        subtitle: "2 - Matériel nécessaire",
        text: "Explorez notre guide complet du matériel de plongée pour débutants et experts.",
        link: "#explore",
    },
    {
        subtitle: "3 - Vous inscrire chez nos partenaires",
        text: "Rejoignez nos clubs partenaires et profitez d'avantages exclusifs.",
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
            className={` text-white h-[380px] overflow-y-auto animate-fade-in ${className}`}
        >
            <h2 className="md:mb-4 text-5xl font-semibold text-center md:text-left mt-5 text-cyan-200 ">
                {title}
            </h2>
            <div className=" mt-12 text-center bg-black/10 backdrop-blur-md rounded-lg p-6">
                {sections[step || 0] && (
                    <section className="space-y-2">
                        <h3 className="text-lg font-medium">{sections[step || 0].subtitle}</h3>
                        <p className="text-sm text-slate-100/90 leading-relaxed">
                            {sections[step || 0].text}
                        </p>
                        {sections[step || 0].link && (
                            <PremiumButton href={sections[step || 0].link} className="mt-4">
                                En savoir plus
                            </PremiumButton>
                        )}
                    </section>
                )}
            </div>
        </div>
    );
};

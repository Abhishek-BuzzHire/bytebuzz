import { aboutData } from "@/data/data";
import { ArrowRight } from "lucide-react";

interface Feature {
    id: string;
    title: string;
    description: string;
    image: string;
}

interface AboutSec {
    heading?: string;
    description?: string;
    linkUrl?: string;
    linkText?: string;
    features?: Feature[];
}

const AboutSection = ({
    heading,
    description,
    linkUrl,
    linkText,
    features = aboutData
}: AboutSec) => {
    return (
        <section className="flex justify-center py-20">
            <div className="container flex flex-col gap-16 lg:px-16">
                <div className="lg:max-w-full">
                    <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                        {heading}
                    </h2>
                    <p className="text-muted-foreground mb-8 lg:text-lg">{description}</p>
                    <a
                        href={linkUrl}
                        className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
                    >
                        {linkText}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {features[0] && (
                        <div className="border-border flex flex-col overflow-clip rounded-xl border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
                            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                                <img
                                    src={features[0].image}
                                    alt={features[0].title}
                                    className="aspect-16/9 h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                    {features[0].title}
                                </h3>
                                <p className="text-muted-foreground lg:text-lg">
                                    {features[0].description}
                                </p>
                            </div>
                        </div>
                    )}
                    {features.slice(1).map((feature) => (
                        <div
                            key={feature.id}
                            className="border-border flex flex-col overflow-clip rounded-xl border"
                        >
                            <div>
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="aspect-16/9 h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground lg:text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { AboutSection };

"use client";

import { servicesData } from "@/data/data";
import { notFound } from "next/navigation";
import { use } from "react";

const ServicePage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = use(params)
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) return notFound();

    return (
        <section className="pb-32">
            {/* Full Width Hero with Background Image */}
            <div
                className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat py-32"
                style={{
                    backgroundImage:
                        `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${service.image})`,
                }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
                        {service.title}
                    </h1>
                </div>
            </div>

            {/* Intro Section */}
            <div className="py-16">
                <div className="px-16 mb-12">
                    <p className="text-muted-foreground text-xl leading-relaxed">
                        {service.description}
                    </p>
                </div>
                <div className="container">
                    <div className="mx-auto max-w-3xl space-y-8 text-left mb-8">
                        {service.sections.map((section, idx) => (
                            <div key={idx} className="space-y-4">
                                <h2 className="text-3xl font-semibold tracking-tight md:text-3xl">
                                    {section.heading}
                                </h2>
                                <div className="space-y-2">
                                    {section.content.map((point, i) => (

                                        <p key={i} className="text-muted-foreground text-md leading-relaxed">
                                            {point}
                                        </p>

                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicePage;

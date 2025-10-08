"use client";

import { ContactSection } from "@/components/ResContactSection";
import { servicesData, serviceSec } from "@/data/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";


const ServicePage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = use(params)
    const service = servicesData.find((s) => s.slug === slug);

    const bottomServices = serviceSec.filter(service => service.slug !== slug);

    if (!service) return notFound();

    return (
        <section className="pb-20">
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
                <div className="w-full bg-accent p-8 mt-8 mb-16 flex justify-center">
                    <div className="flex flex-wrap gap-8 justify-center  px-12">
                        {service.highlights.map((card, i) => (
                            <div key={i} className="border-border bg-background rounded-lg border p-8 transition-shadow hover:shadow-sm space-y-4">
                                <Image src={card.icon} alt={card.label} width={64} height={64} />
                                <p className="text-center">{card.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container mx-auto flex flex-col lg:flex-row gap-8 py-16">
                    <div className="mx-auto max-w-3xl space-y-8 text-left mb-8">
                        {service.sections.map((section, idx) => (
                            <div key={idx} className="space-y-4">
                                <h2 className="text-3xl font-semibold tracking-tight md:text-3xl">
                                    {section.heading}
                                </h2>
                                {section.content.map((para, i) => (
                                    para.type === "paragraph" ? (
                                        <p className="text-bold font-semibold text-lg" key={i}>{para.text}</p>
                                    ) : (
                                        <ul key={i} className="list-disc pl-6 space-y-2">
                                            {para.items.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    )
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-1/3">
                        <ContactSection />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 px-8 md:grid-cols-5">
                {bottomServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div key={index}>
                            <a href={`/services/${service.slug}`}>
                                <div className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-muted rounded-full p-3">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold">{service.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="space-y-2">
                                        {service.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex items-center gap-2">
                                                <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                                                <span className="text-sm font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicePage;

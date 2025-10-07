"use client";

import { serviceSec } from "@/data/data";
import { Code, Cog, PenTool, Shrub } from "lucide-react";

const services = serviceSec;

const ServiceSection = () => {
  return (
    <section className="flex justify-center py-20">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Services
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              We craft digital experiences that captivate and convert, bringing
              your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
             {serviceSec.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
                >
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServiceSection };

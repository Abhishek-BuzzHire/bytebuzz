import { Github, Linkedin, Twitter } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { members, TeamMember } from "@/data/data";
import Image from "next/image";

interface Team {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

const team = members

const Team = ({
  heading = "Our Core Team",
  description = "Our diverse team of experts brings together decades of experience in development, engineering, and database administration.",
  members = team
}: Team) => {
  return (
    <section className="py-24 lg:py-20">
      <div className="container mx-auto lg:px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div key={member.id} className="p-6">
              <div className="group relative h-108 w-full overflow-hidden rounded-lg bg-cover bg-center p-8 pt-4 transition-shadow hover:shadow-xl"

                style={{
                  backgroundImage: `url(/members/${member.image})`
                }}>
                <div className="absolute inset-x-0 bottom-0 z-0 h-2/5 bg-gradient-to-t from-black/100 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <div className="flex justify-center transition-transform duration-500 bottom-0 group-hover:-translate-y-5">
                    <div className="text-center">
                      <h3 className="mb-1 text-3xl font-semibold text-white">{member.name}</h3>
                      <p className="text-white text-lg font-light">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <div className="details-container space-y-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full">
                    <div className="flex gap-3 justify-center">
                      {member.github && (
                        <a
                          href={member.github}
                          className="bg-primary rounded-lg p-2"
                        >
                          <Github className="text-white size-6" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          className="bg-primary rounded-lg p-2"
                        >
                          <Twitter className="text-white size-6" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="bg-primary rounded-lg p-2"
                        >
                          <Linkedin className="text-white size-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team };

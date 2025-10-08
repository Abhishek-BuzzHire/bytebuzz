import { Github, Linkedin, Twitter } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { members, TeamMember } from "@/data/data";

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
      <div className="container mx-auto px-4">
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
              <div className="flex bg-accent p-4 rounded-md flex-col items-center text-center">
                <div className="mb-4">
                  <Avatar className="size-20 lg:size-32">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback className="text-lg font-semibold">
                      {member.name}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="mb-6">
                  <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm font-medium">
                    {member.role}
                  </p>
                </div>

                <div className="flex gap-3">
                  {member.github && (
                    <a
                      href={member.github}
                      className="bg-muted/50 rounded-lg p-2"
                    >
                      <Github className="text-muted-foreground size-4" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      className="bg-muted/50 rounded-lg p-2"
                    >
                      <Twitter className="text-muted-foreground size-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="bg-muted/50 rounded-lg p-2"
                    >
                      <Linkedin className="text-muted-foreground size-4" />
                    </a>
                  )}
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

'use client'

import { AboutSection } from "@/components/AboutSection";
import { Clientele } from "@/components/Clientele";
import { ContactSection } from "@/components/ContactSection";
import { Cta } from "@/components/Cta";
import { FooterSection } from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import { ServiceSection } from "@/components/SeriviceSection";
import { Team } from "@/components/TeamSection";

const HomePage = () => {
    return (
        <div className="lg:px-0 sm:px-4">
            <HeroSection heading={"SaaS Services For Your Needs"} description={"We make businesses go big through our tech services that optimizes and enhances your business activities everyday."} button={{
                text: "Explore More",
                icon: undefined,
                url: "/"
            }} />

            <AboutSection heading={"About Section Title"}
                description={"Pariatur aliqua veniam eiusmod nisi pariatur dolore ipsum aliqua do adipisicing. Consectetur consectetur cupidatat dolore eu dolor cupidatat. Laboris id anim in exercitation minim do aliquip eiusmod laborum est proident. Tempor minim aute eiusmod aute reprehenderit in velit sunt laboris nulla reprehenderit excepteur."}
                linkText={"Book a consultation"}
                />
            <ServiceSection />
            <Cta heading={"Call to Action"} description={"Sit cillum reprehenderit quis magna esse ipsum officia ex commodo."} buttons={{
                primary: {
                    text: "Book a call",
                    url: ""
                },
                secondary: {
                    text: "Explore more",
                    url: ""
                },
            }} />
            <Team />
            {/* <Clientele /> */}
            <ContactSection />
        </div>
    )
}

export default HomePage;    
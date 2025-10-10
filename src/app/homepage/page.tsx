'use client'

import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Cta } from "@/components/Cta";
import HeroSection from "@/components/HeroSection";
import { ServiceSection } from "@/components/SeriviceSection";
import { Team } from "@/components/TeamSection";

const HomePage = () => {
    return (
        <div className="overflow-hidden">
            <HeroSection heading={"SaaS Services For Your Needs"} description={"We make businesses go big through our tech services that optimizes and enhances your business activities everyday."} button={{
                text: "Explore More",
                icon: undefined,
                url: "/"
            }} />

            <AboutSection heading={"How It All Started"}
                description={"ByteBuzz (a unit of BuzzHire Private Limited) was established in September 2025 with a clear mission — to help businesses harness the power of technology in the smartest and most efficient way possible. At ByteBuzz, we integrate the industry's best technologies to match each customer's unique needs and deliver them as a service, backed by our strong commitment to excellence."}
                linkText="See our services"
                linkUrl="/services"
                />
            <ServiceSection />
            <Cta heading={"Ready to Scale"} description={"Sit cillum reprehenderit quis magna esse ipsum officia ex commodo."} buttons={{
                primary: {
                    text: "Book a call",
                    url: "/contact"
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
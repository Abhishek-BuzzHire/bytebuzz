"use client";

import { MenuIcon } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { serviceSec } from "@/data/data";
import { ThemeToggle } from "./ThemeToggle";

const careers: { title: string; href: string; description: string }[] = [
    {
        title: "Career at ByteBuzz",
        href: "bytebuzz",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Career at BuzzHire",
        href: "buzzhire",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Explore Jobs",
        href: "jobs",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
]

const NavBar = () => {
    const services = serviceSec;

    return (
        <section className="sticky top-0 z-50 bg-background flex justify-center">
            <div className="container p-4">
                <nav className="flex items-center justify-between">
                    <a
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <img
                            src="/logo.png"
                            className="max-h-8"
                            alt="ByteBuzz.in"
                        />
                        <span className="text-lg font-semibold tracking-tighter">
                            ByteBuzz.in
                        </span>
                    </a>
                    <NavigationMenu className="hidden lg:block">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/about"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[600px] grid-cols-2 p-3">
                                        {services.map((service, index) => (
                                            <NavigationMenuLink
                                                href={`/services/${service.slug}`}
                                                key={index}
                                                className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                            >
                                                <div key={service.title}>
                                                    <p className="mb-1 font-semibold text-foreground">
                                                        {service.title}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[600px] grid-cols-2 p-3">
                                        {careers.map((career, index) => (
                                            <NavigationMenuLink
                                                href={`/careers/${career.href}`}
                                                key={index}
                                                className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                            >
                                                <div key={career.title}>
                                                    <p className="mb-1 font-semibold text-foreground">
                                                        {career.title}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {career.description}
                                                    </p>
                                                </div>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="hidden items-center gap-4 lg:flex">
                        {/* <Button variant="outline">Contact</Button> */}
                        <ThemeToggle />
                        <a href="/contact">
                            <Button className="cursor-pointer">Contact</Button>
                        </a>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="max-h-screen overflow-auto">
                            <SheetHeader>
                                <SheetTitle>
                                    <a
                                        href="/"
                                        className="flex items-center gap-2"
                                    >
                                        <img
                                            src="/logo.png"
                                            className="max-h-8"
                                            alt="ByteBuzz.in"
                                        />
                                        <span className="text-lg font-semibold tracking-tighter">
                                            ByteBuzz.in
                                        </span>
                                    </a>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-4">
                                <a href="/" className="font-medium">
                                    Home
                                </a>
                                <div className="flex flex-col gap-6">
                                    <a href="/about" className="font-medium">
                                        About
                                    </a>
                                </div>
                                <Accordion type="single" collapsible className="mt-4 mb-2">
                                    <AccordionItem value="solutions" className="border-none">
                                        <AccordionTrigger className="text-base hover:no-underline">
                                            Services
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="grid md:grid-cols-2">
                                                {services.map((service, index) => (
                                                    <a
                                                        href={`/services/${service.slug}`}
                                                        key={index}
                                                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                                    >
                                                        <div key={service.title}>
                                                            <p className="mb-1 font-semibold text-foreground">
                                                                {service.title}
                                                            </p>
                                                            <p className="text-sm text-muted-foreground">
                                                                {service.description}
                                                            </p>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion type="single" collapsible className="mt-4 mb-2">
                                    <AccordionItem value="solutions" className="border-none">
                                        <AccordionTrigger className="text-base hover:no-underline">
                                            Careers
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="grid md:grid-cols-2">
                                                {careers.map((career, index) => (
                                                    <a
                                                        href={career.href}
                                                        key={index}
                                                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                                    >
                                                        <div key={career.title}>
                                                            <p className="mb-1 font-semibold text-foreground">
                                                                {career.title}
                                                            </p>
                                                            <p className="text-sm text-muted-foreground">
                                                                {career.description}
                                                            </p>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <div className="mt-6 flex flex-col gap-4">
                                    {/* <Button variant="outline">Contact</Button> */}
                                    <ThemeToggle />
                                    <a href="/contact" className="cursor-pointer">
                                        <Button>Contact</Button>
                                    </a>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    );
};

export { NavBar };

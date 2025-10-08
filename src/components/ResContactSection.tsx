import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactdata } from "@/data/data";

const contact = contactdata;

const ContactSection = () => {
  return (
    <section className="flex flex-col gap-10">
      {/* Contact Heading + Info */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-left">
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-3 text-center lg:text-left">
            We are available for questions, feedback, or collaboration opportunities.
            Let us know how we can help!
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {contact.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-muted rounded-lg p-4 flex flex-col justify-between gap-4"
              >
                <div>
                  <Icon className="h-6 w-auto mb-2" />
                  <p className="mb-1 text-md font-semibold">{item.label}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="font-semibold hover:underline">
                  {item.label === "Email" ? (
                    <a href={`mailto:${item.main}`}>{item.main}</a>
                  ) : item.label === "Phone" ? (
                    <a href={`tel:${item.main}`}>{item.main}</a>
                  ) : (
                    item.main
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col gap-6 rounded-lg border p-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="fullname">Full Name</Label>
            <Input type="text" id="fullname" placeholder="Full Name" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input type="number" id="phone" placeholder="Phone" />
          </div>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" placeholder="Subject" />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
        <Button className="w-full">Send Message</Button>
      </div>
    </section>
  );
};

export { ContactSection };

import React from "react";
import { PageHeader } from "@/components/PublicSystem";
import {
  ContactInfo,
  ContactForm,
  HeadquartersMap,
} from "@/components/PublicSystem/ContactPage";

import bannerContact from "@/assets/banner-dankhoan.jpg";

const ContactPage: React.FC = () => {
  const getBreadcrumbs = () => [
    { label: "Trang chủ", href: "/" },
    { label: "Liên hệ" },
  ];

  return (
    <>
      <PageHeader
        title="Liên hệ"
        backgroundImage={bannerContact}
        breadcrumbs={getBreadcrumbs()}
      />

      <div className="bg-vietsov-background">
        {/* Contact Information */}
        <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
          <ContactInfo />
        </section>

        {/* Contact Form */}
        <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
          <ContactForm />
        </section>

        {/* Headquarters Map */}
        <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
          <HeadquartersMap />
        </section>
      </div>
    </>
  );
};

export default ContactPage;

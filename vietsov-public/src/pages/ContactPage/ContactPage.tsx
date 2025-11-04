import React from "react";
import { PageHeader } from "@/components";
import {
  ContactInfo,
  ContactForm,
  HeadquartersMap,
} from "@/components/ContactPage";

import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";

const ContactPage: React.FC = () => {
  const getBreadcrumbs = () => [
    { label: "Trang chủ", href: "/" },
    { label: "Liên hệ" },
  ];

  return (
    <>
      <PageHeader
        title="Liên hệ"
        backgroundImage={danKhoanBackground}
        breadcrumbs={getBreadcrumbs()}
      />

      <div className="bg-vietsov-background">
        {/* Contact Information */}
        <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 inch32:pt-22 inch32:pb-15">
          <div className="container mx-auto px-4">
            <ContactInfo />
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 inch32:pt-22 inch32:pb-15">
          <div className="container mx-auto px-4">
            <ContactForm />
          </div>
        </section>

        {/* Headquarters Map */}
        <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 inch32:pt-22 inch32:pb-15">
          <div className="container mx-auto px-4">
            <HeadquartersMap />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;

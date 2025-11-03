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
        <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 2xl:pt-22 2xl:pb-15 px-4 md:px-12 lg:px-60 2xl:px-80">
          <ContactInfo />
        </section>

        {/* Contact Form */}
        <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 2xl:pt-22 2xl:pb-15 px-4 md:px-12 lg:px-60 2xl:px-80">
          <ContactForm />
        </section>

        {/* Headquarters Map */}
        <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 2xl:pt-22 2xl:pb-15 px-4 md:px-12 lg:px-60 2xl:px-80">
          <HeadquartersMap />
        </section>
      </div>
    </>
  );
};

export default ContactPage;

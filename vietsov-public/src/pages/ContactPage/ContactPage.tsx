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
          <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
            <ContactInfo />
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 inch32:pt-22 inch32:pb-15">
          <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
            <ContactForm />
          </div>
        </section>

        {/* Headquarters Map */}
        <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 inch32:pt-22 inch32:pb-15">
          <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
            <HeadquartersMap />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;

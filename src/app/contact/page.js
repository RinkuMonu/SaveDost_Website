"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";

function Contact() {
  const data = {
    id: 1,
    subheading: "Contact",
    heading: "We’re Here to Help Get in Touch",
    description:
      "If you have any questions or need assistance, send us an email or use the contact form. Our support team will respond as soon as possible.",
    bgImage: "/image/contact-bg-img.png",
    centerImage: "/image/contact-support-hero.png",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile Number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Only digits are allowed";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: digitsOnly });
    } else if (name === "name") {
      // Allow only alphabets and spaces
      const lettersOnly = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData({ ...formData, [name]: lettersOnly });
    } else {
      // Handle all other inputs normally
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     alert("Form submitted successfully!");
  //     console.log(formData);
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       message: "",
  //       terms: false,
  //     });
  //     setErrors({});
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    // setLoading(true);

    const postData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      service: "N/A",
      website_id: 6,
    };

    try {
      const response = await axios.post(
        "https://cms.sevenunique.com/apis/contact-query/set-contact-details.php",
        postData,
        {
          headers: {
            Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      if (response.data.status !== "success") {
        throw new Error("Failed to send message");
      }
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent successfully.",
        confirmButtonColor: "#ffb300",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        terms: false,
      });
      setErrors({});
    } catch (error) {
      console.error("Error sending message:", error);

      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to send message. Please try again later.",
        confirmButtonColor: "#ffb300",
      });
    } finally {
      // setLoading(false);
    }
  };
  return (
    <>
      {/* UI REDESIGN: Contact hero only; form and submission logic are unchanged. */}
      <section className="overflow-hidden bg-[#eaf6f9] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-[#b9e1e9] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#026381] shadow-sm">
              Contact SaveDost
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#0C3D4C] sm:text-4xl lg:text-[52px] lg:leading-[1.1]">
              Let&apos;s find the right <span className="text-[#0289ad]">solution together.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 lg:mx-0 lg:text-lg">
              Questions about our services, partnership opportunities, or your account? Share your
              query and our support team will help you.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="mailto:support@savedost.com" className="pan-hero-button gap-2">
                <MdOutlineMail className="text-lg" /> Email Us
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[660px]">
            <div className="relative h-[330px] sm:h-[420px] lg:h-[460px]">
              <Image
                src={data.centerImage}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="SaveDost customer support"
                className="object-contain mix-blend-multiply"
                priority
              />
            </div>
            <div className="absolute bottom-5 left-5 rounded-2xl border border-[#d9edf2] bg-white px-4 py-3 shadow-lg sm:bottom-7 sm:left-7">
              <p className="text-xs font-extrabold text-[#0C3D4C]">Support hours</p>
              <p className="mt-1 text-[11px] text-slate-500">Mon–Sat, 9:30 AM–6:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* UI REDESIGN: Compact introduction replaces the oversized repeated title. */}
      <section className="bg-[#f5f9fb] px-4 pt-12 text-center sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
            Send us a message
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-[#0C3D4C] sm:text-3xl">
            How can we help you today?
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Complete the form or email us. We&apos;ll connect you with the right team.
          </p>
        </div>
      </section>

      {/* ----------- FORM + INFO SECTION ----------- */}
      {/* UI REDESIGN: Existing controlled inputs and submit handler are preserved. */}
      <section className="bg-[#f5f9fb] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Form */}
          <div className="rounded-[24px] border border-[#d9edf2] bg-white p-6 shadow-[0_18px_45px_rgba(12,61,76,0.08)] sm:p-8">
            <h2 className="text-2xl font-extrabold text-[#0C3D4C]">Tell us what you need</h2>
            <p className="mb-7 mt-2 text-sm leading-6 text-slate-500">
              Share your details below and our team will get back to you.
            </p>
            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#cfe5eb] bg-[#fbfdfe] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/15"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Business Email */}
              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Business Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#cfe5eb] bg-[#fbfdfe] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/15"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  className="w-full rounded-xl border border-[#cfe5eb] bg-[#fbfdfe] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/15"
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-[#cfe5eb] bg-[#fbfdfe] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/15"
                  rows="3"
                  placeholder="Tell us about your needs.."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              {/* Terms */}
              <div className="mb-4 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 accent-[#026381]"
                />
                <label className="text-sm text-gray-600">I accept terms & conditions.</label>
              </div>
              {errors.terms && <p className="text-red-500 text-sm mb-4">{errors.terms}</p>}

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#026381] py-3.5 text-sm font-bold text-white shadow-[0_9px_20px_rgba(2,99,129,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#0C3D4C]"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Info Section */}
          <aside className="flex h-full flex-col rounded-[24px] border border-[#c7e5eb] bg-[#dff2f6] p-6 text-[#0C3D4C] shadow-[0_18px_45px_rgba(12,61,76,0.09)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0289ad]">
              Contact details
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-extrabold leading-tight sm:text-3xl">
              Reach our support team by email.
            </h2>
            <p className="mb-6 mt-3 text-sm leading-6 text-slate-600">
              Our support team is available to answer service, account and transaction-related
              questions.
            </p>

            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 rounded-xl border border-white bg-white/80 p-3 shadow-sm">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#026381]">
                  <MdOutlineMail className="text-lg text-white" />
                </span>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="mt-1 text-sm text-slate-600">
                    <a href="mailto:support@savedost.com" className="hover:underline">
                      support@savedost.com
                    </a>
                  </p>

                  {/* <p className="text-gray-500 text-sm">
                    <a
                      href="mailto:support@savedost.com"
                      className="hover:underline"
                    >
                      support@savedost.com
                    </a>
                  </p> */}
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-white bg-white/80 p-3 shadow-sm">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#026381]">
                  <FaRegClock className="text-white" />
                </span>
                <div>
                  <p className="font-bold">Office Hours: </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Mon–Sat: 9:30 AM to 6:30 PM <br />
                    Sun: Closed
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-white bg-white/80 p-3 shadow-sm">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#026381]">
                  <MdOutlineMail className="text-lg text-white" />
                </span>
                <div>
                  <p className="font-bold">Email support</p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    For assistance, write to support@savedost.com.
                  </p>
                  {/* <p className="text-gray-500 text-sm">
                    <span className="font-bold">Corporate Office:</span>Office
                    No. 101/2, Vakratunda Corporate Park Premises Co-operative
                    Society Limited, Off Aarey Road, Goregaon (East), Mumbai –
                    400 063
                  </p> */}
                </div>
              </li>
            </ul>

            <div className="mt-auto pt-6">
              <div className="rounded-2xl bg-[#0C3D4C] p-5 text-white shadow-[0_12px_28px_rgba(12,61,76,0.18)]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9de4ef]">
                  Before contacting support
                </p>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Keep your registered mobile number and transaction reference ready so we can
                  assist you more efficiently.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold">
                  <FaRegClock className="text-[#8ac954]" />
                  Support is available during published office hours
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ----------- Additional Sections ----------- */}
      {/* <section className="py-16">
        <BenefitsSection2 />
      </section>
      <section className="py-16">
        <PartnersSection />
      </section>
      <section className="pt-6">
        <TestimonialSlider />
      </section>
      <ContactBanner /> */}
    </>
  );
}

export default Contact;

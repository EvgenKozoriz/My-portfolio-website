"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

const Contact = () => {
  const [emailInputText, setEmailInputText] = useState("");
  const [messageInputText, setMessageInputText] = useState("");

  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      //   viewport={{
      //     once: true,
      //   }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-slate-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:zkozoriz11@gmail.com">
          zkozoriz11@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          setEmailInputText("");
          setMessageInputText("");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={emailInputText}
          onChange={(e) => setEmailInputText(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={messageInputText}
          onChange={(e) => setMessageInputText(e.target.value)}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;

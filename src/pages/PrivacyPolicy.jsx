import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-center text-6xl font-bold text-gray-900 mb-6 transition-transform transform hover:scale-110 hover:shadow-xl cursor-pointer hover:shadow-blue-500/50">
        Privacy Policy
      </h1>
      <p className="text-center text-lg text-gray-500 mb-10">
        Last updated: November 29, 2024
      </p>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>

      <h2 className="text-4xl font-bold text-gray-800 mt-12 mb-6 border-b-4 border-blue-500 inline-block">
        Interpretation and Definitions
      </h2>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Interpretation</h3>
      <p className="text-lg text-gray-700 mb-6">
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Definitions</h3>
      <p className="text-lg text-gray-700 mb-6">For the purposes of this Privacy Policy:</p>

      <ul className="text-lg text-gray-700 list-disc pl-6 space-y-4 mb-8">
        <li>
          <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
        </li>
        <li>
          <strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.
        </li>
        <li>
          <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to SaaHas.
        </li>
        <li>
          <strong>Cookies</strong> are small files placed on Your device containing details of Your browsing history.
        </li>
        <li>
          <strong>Country</strong> refers to: Karnataka, India.
        </li>
        <li>
          <strong>Device</strong> means any device that can access the Service such as a computer, mobile phone, or digital tablet.
        </li>
        <li>
          <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
        </li>
        <li>
          <strong>Usage Data</strong> refers to data collected automatically from the use of the Service.
        </li>
        <li>
          <strong>Website</strong> refers to SaaHas, accessible from{" "}
          <a
            href="http://localhost:5173/"
            target="_blank"
            rel="external nofollow noopener"
            className="text-blue-600 hover:underline"
          >
            http://localhost:5173/
          </a>
        </li>
        <li>
          <strong>You</strong> means the individual accessing or using the Service, or the company, or legal entity on behalf of whom such individual is accessing or using the Service.
        </li>
      </ul>

      <h2 className="text-4xl font-bold text-gray-800 mt-12 mb-6 border-b-4 border-blue-500 inline-block">
        Collecting and Using Your Personal Data
      </h2>
      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Types of Data Collected</h3>

      <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Personal Data</h4>
      <ul className="text-lg text-gray-700 list-disc pl-6 space-y-2 mb-6">
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Usage Data</li>
      </ul>

      <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Usage Data</h4>
      <p className="text-lg text-gray-700 mb-6">
        Usage Data is collected automatically when using the Service. It may include information such as Your device's Internet Protocol (IP) address, browser type, pages visited, time and date of visit, duration of visits, and other diagnostic data.
      </p>

      <h2 className="text-4xl font-bold text-gray-800 mt-12 mb-6 border-b-4 border-blue-500 inline-block">
        Changes to this Privacy Policy
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
"use client";

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import { useState } from 'react';

// List of images
const imageList = [
  "background-modaltellstory.png",
  "background-opportunities-mobile.png",
  "background-opportunities.png",
  "background-shareStory.png",
  "background-wave.png",
  "becomeaPartner.png",
  "careers.png",
  "collaborate.png",
  "contribute-person-1.png",
  "contribute.png",
  "join-become-partner.png",
  "join-careers.png",
  "joinus-person-side.png"
];

// Function to find the correct image path
const findImage = (imageName: string) => {
  if (!imageList.includes(imageName)) {
    console.warn(`Image ${imageName} not found in imageList.`);
    return "";
  }
  return `/images/get-involved-page/${imageName}`;
};

const GetInvolvedPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { getInvolvedSection = {} } = usei18n(lang) || {};
  const [activeTab, setActiveTab] = useState<'collaborate' | 'story'>('collaborate');

  return (
    <div className="relative -top-24 bg-blue-200 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold">
          {getInvolvedSection?.mainTitle || "Other Ways To Contribute"}
        </h1>
      </section>

      {/* Tabs Section */}
      <div className="flex justify-center space-x-8 border-b-2 border-gray-300 pb-4 text-lg font-medium bg-blue-100">
        <button
          onClick={() => setActiveTab('collaborate')}
          className={`pb-2 ${activeTab === 'collaborate' ? 'border-b-4 border-green-400 text-white' : 'text-gray-300'}`}
        >
          {getInvolvedSection?.collaborateTab || "Collaborate"}
        </button>
        <button
          onClick={() => setActiveTab('story')}
          className={`pb-2 ${activeTab === 'story' ? 'border-b-4 border-green-400 text-white' : 'text-gray-300'}`}
        >
          {getInvolvedSection?.storyTab || "Tell Your Story"}
        </button>
      </div>

      {/* Collaborate Section */}
      {activeTab === 'collaborate' && (
        <div className="py-20 px-20 bg-white text-black shadow-lg mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold">
                {getInvolvedSection?.collaborateTitle || ""}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {getInvolvedSection?.collaborateText || "Join us in making a difference."}
              </p>
            </div>
            <div>
              <ExportedImage
                src={findImage("collaborate.png")}
                alt="Collaboration"
                basePath={basePath}
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* How You Can Get Involved */}
          <h2 className="text-center mt-16 text-3xl font-semibold">
            {getInvolvedSection?.howInvolvedTitle || "How You Can Get Involved"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 text-center">
            <div>
              <h3 className="text-2xl font-medium">{getInvolvedSection?.careersTitle || "Careers"}</h3>
              <ExportedImage
                src={findImage("careers.png")}
                alt="Careers"
                basePath={basePath}
                width={300}
                height={200}
              />
              <p className="mt-4">{getInvolvedSection?.careersText || "Join our team and make an impact."}</p>
              <button className="mt-4 px-6 py-2 bg-blue-400 text-white rounded-lg">
                {getInvolvedSection?.careersButton || "View Careers"}
              </button>
            </div>
            <div>
              <h3 className="text-2xl font-medium">{getInvolvedSection?.partnerTitle || "Become a Partner"}</h3>
              <ExportedImage
                src={findImage("becomeaPartner.png")}
                alt="Partner"
                basePath={basePath}
                width={300}
                height={200}
              />
              <p className="mt-4">{getInvolvedSection?.partnerText || "Join forces with us to make a difference."}</p>
              <button className="mt-4 px-6 py-2 bg-blue-400 text-white rounded-lg">
                {getInvolvedSection?.partnerButton || "Contact Us"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tell Your Story Section */}
      {activeTab === 'story' && (
        <div className="py-20 px-20 bg-blue-100">
          <h2 className="text-3xl font-semibold text-center">{getInvolvedSection?.storyTitle || "Share Your Personal Story"}</h2>
          <p className="text-center mt-4">{getInvolvedSection?.storyText || "Tell us how COVID-19 impacted your life."}</p>

          {/* Background Image for Story Section */}
          <div className="mt-12 relative w-full h-96">
            <ExportedImage
              src={findImage("background-shareStory.png")}
              alt="Share Your Story"
              basePath={basePath}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="mt-12 flex justify-center">
            <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md text-black">
              <input
                type="email"
                placeholder={getInvolvedSection?.emailPlaceholder || "Your Email"}
                className="w-full border rounded-lg p-3 mb-4"
                required
              />
              <input
                type="text"
                placeholder={getInvolvedSection?.namePlaceholder || "Your Name"}
                className="w-full border rounded-lg p-3 mb-4"
                required
              />
              <textarea
                placeholder={getInvolvedSection?.storyPlaceholder || "Your Story"}
                className="w-full border rounded-lg p-3 mb-4"
                rows={4}
                required
              />
              <input type="file" className="w-full border rounded-lg p-3 mb-4" accept="image/*" />
              <button type="submit" className="w-full bg-blue-400 text-white py-3 rounded-lg">
                {getInvolvedSection?.submitButton || "Send"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInvolvedPage;

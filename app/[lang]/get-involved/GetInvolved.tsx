import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { BgBody, BgHeader } from '@/public/images/story';
import ExportedImage from 'next-image-export-optimizer';
import { useState } from 'react';
import { usei18n } from '../../i18n';

const GetInvolvedPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    getInvolved: { collaborateSection, tellYourStorySection },
  } = usei18n(lang);

  const [activeTab, setActiveTab] = useState<'collaborate' | 'story'>('collaborate');

  return (
    <div className="relative -top-24">
      {/* Hero Section */}
      <section>
        <div className="relative bg-gradient-to-b from-[#1b3f6f] to-[#1b3b6f]">
          <ExportedImage
            className="absolute h-full w-full object-cover opacity-40"
            src={BgHeader}
            alt=""
            priority
            basePath={basePath}
          />
          <div className="relative flex flex-col items-center justify-center py-40">
            <h2 className="text-5xl font-normal text-white">{collaborateSection.title}</h2>
            <p className="mt-4 max-w-xl text-center text-white">{collaborateSection.description}</p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="relative bg-[#3468b2]">
        <ExportedImage
          src={BgBody}
          alt=""
          className="absolute h-full w-full object-cover opacity-40"
          basePath={basePath}
        />

        <div className="py-10">
          <div className="flex justify-center space-x-10 text-white">
            <button
              className={`text-2xl ${activeTab === 'collaborate' ? 'border-b-4 border-green-400' : 'opacity-50'}`}
              onClick={() => setActiveTab('collaborate')}
            >
              Collaborate
            </button>
            <button
              className={`text-2xl ${activeTab === 'story' ? 'border-b-4 border-green-400' : 'opacity-50'}`}
              onClick={() => setActiveTab('story')}
            >
              Tell Your Story
            </button>
          </div>
        </div>

        {/* Content Based on Active Tab */}
        <div className="relative mx-auto max-w-3xl space-y-6 px-10 text-white">
          {activeTab === 'collaborate' ? (
            <div>
              <h3 className="text-4xl">{collaborateSection.heading}</h3>
              <p>{collaborateSection.text}</p>
            </div>
          ) : (
            <div>
              <h3 className="text-4xl">{tellYourStorySection.heading}</h3>
              <p>{tellYourStorySection.text}</p>

              {/* Form */}
              <div className="mt-8 space-y-6">
                <input
                  type="email"
                  placeholder="*Email"
                  className="w-full rounded-md p-3 text-black"
                />
                <input
                  type="text"
                  placeholder="*Name"
                  className="w-full rounded-md p-3 text-black"
                />
                <textarea
                  placeholder="*Share with us your story"
                  className="w-full rounded-md p-3 text-black"
                  rows={5}
                ></textarea>
                <input type="file" className="w-full rounded-md p-3 bg-white text-black" />

                <button className="w-full rounded-md bg-blue-500 p-3 text-white">Send</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;

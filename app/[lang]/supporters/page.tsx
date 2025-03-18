'use client';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { BgHeader } from '@/public/images/supporters';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import { ButtonType } from '../themes';
import ModalSupporter from '../components/ModalSupporter';
import { useState } from 'react';

const GoogleFormSubmitter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
};
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

// Submit the form
const handleSubmit = async (e) => {
  e.preventDefault();

  // Construct the form data to match the Google Form entry names
  const formPayload = new FormData();
  formPayload.append('entry.123456', formData.name); // Replace with actual field entry name
  formPayload.append('entry.654321', formData.email); // Replace with actual field entry name

  try {
    const response = await fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSfPCkOF2egmshFjXPN01wwlfWDuKLYpUX6qKi1owg35SjrnaA/formResponse',
      {
        method: 'POST',
        body: formPayload,
      }
    );

    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Form submission failed.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Error submitting form.');
  }
};

const SupportersPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    supporters: { title, buttontext, supportersList, contactusform },
  } = usei18n(lang);

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <div className="bg-[#4064AD]">
      {/* Globe background img */}
      <div className="relative -top-24 flex justify-center">
        <ExportedImage
          className="h-full max-h-[700px] w-full object-cover"
          src={BgHeader}
          alt=""
          priority
          basePath={basePath}
        />
        <Title
          Text={title}
          H="h1"
          TitleClassProps="
					absolute top-[50%] 
					left-[50%] 
					translate-y-[-50%] 
					translate-x-[-50%]
					text-white
					text-center
          pt-10
          text-xl"
        />
        <button
          className={`${ButtonType.primary} 'pt-10 translate-x-[-50%]'} pb-2px absolute top-[80%] h-[65px] w-[250px] translate-y-[-50%] rounded-full align-middle text-lg font-semibold`}
          onClick={() => setShowModal(true)}
        >
          {' '}
          {buttontext}
        </button>
        {showModal ? (
          <div onClick={closeModal}>
            <ModalSupporter
              close={closeModal}
              title={contactusform.title}
              nametitle={contactusform.nametitle}
              emailtitle={contactusform.emailtitle}
              texttitle={contactusform.texttitle}
              textplaceholder={contactusform.textplaceholder}
              submitButtonText={contactusform.submitButtonText}
              content={contactusform.content}
            />
          </div>
        ) : null}
      </div>

      <div className="relative -top-24 z-10 flex flex-col items-center justify-center bg-gradient-to-b from-[#111B2E] to-[#4064AD]">
        <div className="flex max-w-[1440px] flex-col items-center justify-center">
          <div className="mt-[80px] w-[100vw] max-w-[1440px] md:hidden">
            {/* Supporters mobile view */}
            <div className="flex w-full flex-wrap justify-center">
              {supportersList.map(({ img, alt, link }) => (
                <div
                  className="mx-1 my-auto flex basis-1/4 justify-center px-2 sm:px-4"
                  key={alt}
                >
                  <Link href={link} target="_blank">
                    <ExportedImage
                      src={img}
                      alt={alt}
                      priority
                      basePath={basePath}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop view */}
          <div className="hidden w-full max-w-[1440px] md:block">
            <div className="mb-40"></div>

            {/* Supporters */}
            <div className="flex w-full flex-wrap justify-center px-12">
              {supportersList.map(({ img, alt, link }) => (
                <div
                  className="mx-0 my-auto flex basis-1/4 justify-center px-6"
                  key={alt}
                >
                  <Link href={link} target="_blank">
                    <ExportedImage
                      src={img}
                      alt={alt}
                      priority
                      basePath={basePath}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportersPage;

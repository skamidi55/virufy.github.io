import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { BgHeader } from '@/public/images/supporters';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usei18n } from '../../i18n';
import Title from '../components/Title';

const SupportersPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    supporters: { title, supportersList },
  } = usei18n(lang);

  return (
    <div className="bg-white">
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
      </div>

      <div className="relative -top-24 z-10 flex flex-col items-center justify-center bg-white">
        <div className="flex max-w-[1440px] flex-col items-center justify-center">
          {/* Our Supporters heading */}
          <div className="mb-10 mt-10 w-full text-center">
            <h2 className="text-1xl relative inline-block font-semibold text-blue-700 md:text-4xl">
              Our Supporters
              <div className="absolute bottom-[-8px] left-[-10%] h-[2px] w-[120%] bg-green-500 md:bottom-[-12px] md:h-[3px]"></div>
            </h2>
          </div>
          <div className="mt-0 w-[100vw] max-w-[1440px] md:hidden">
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
            <div className="mb-10"></div>

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

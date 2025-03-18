import { ButtonType } from '../themes';

export default function ModalSupporter({
  close,
  title,
  nametitle,
  emailtitle,
  texttitle,
  textplaceholder,
  submitButtonText,
  content,
}: {
  close: () => void;
  title: string;
  nametitle: string;
  emailtitle: string;
  texttitle: string;
  textplaceholder: string;
  submitButtonText: string;
  content: string;
}) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div
          className="relative mx-auto h-[500px] w-[300px] md:h-[500px] md:w-[700px]"
          onClick={(e) => e.stopPropagation()}
        >
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-2xl border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}

            <div className="flex w-full rounded-t">
              {/* Close button */}
              <div className="absolute flex w-full flex-col items-end pr-5 pt-3">
                <button
                  className="flex justify-center rounded-full text-xl font-medium text-white shadow-xl outline-none transition-all duration-150 ease-linear"
                  type="button"
                  onClick={close}
                >
                  X
                </button>
              </div>
            </div>
            {/*body*/}
            <div className="relative flex flex-col items-center rounded-b-2xl bg-gradient-to-b from-[#273F6A] to-[#4167AD] p-6">
              <p className="mb-6 mt-2 leading-relaxed">
                <span className="color-black text-center text-4xl font-bold text-gray-200">
                  {title}
                </span>
              </p>
              <span className="color-black text-center text-lg text-gray-200">
                {content}
              </span>
              <form
                className="m-8 w-full md:px-6"
                action={'Placehold for google form'}
                target="_blank"
                autoComplete="off"
              >
                <p>{nametitle}</p>
                <input
                  name="entry.285593858"
                  type="text"
                  className="focus: border-blue mt-2 w-full p-2 text-black shadow-lg"
                  required
                  placeholder={nametitle}
                ></input>
                <p className="pt-2">{emailtitle}</p>
                <input
                  name="entry.1660753976"
                  type="email"
                  className="focus: border-blue mt-2 w-full p-2 text-black shadow-lg"
                  required
                  placeholder={emailtitle}
                ></input>
                <p className="pt-2">{texttitle}</p>
                <textarea
                  name="entry.1273877453"
                  className="focus: border-blue mt-2 w-full p-2 text-black shadow-lg"
                  required
                  placeholder={textplaceholder}
                ></textarea>
              </form>
              <button
                className={`${ButtonType.primary} 'pt-10 pb-2px h-[50px] w-[150px] rounded-full align-middle text-base font-semibold`}
                onClick={() => close()}
              >
                {' '}
                {submitButtonText}
              </button>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}

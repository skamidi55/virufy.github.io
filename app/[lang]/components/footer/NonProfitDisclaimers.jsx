import Text from '../Text';

export default function NonProfitDisclaimers({nonProfitSection}) {
    return (
        <>
        <a href="https://www.guidestar.org/profile/shared/f0cf98a8-3b5a-495f-86c0-d2d58564086c" target="_blank" className="block mt-4">
          <img src="https://widgets.guidestar.org/TransparencySeal/10153729" alt="GuideStar Profile" className="mx-auto" />
        </a>
        <div className="align-center mt-10 flex w-full flex-col gap-7 text-white lg:hidden">
            <div className="align-center m-auto max-w-4xl text-center text-[25px]">
              <Text Text={nonProfitSection.title} Style="" TextClassProps="" />
            </div>
            <div className="align-center m-auto mx-12 mt-4 max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text={nonProfitSection.textOne}
                Style="normal"
              />
            </div>
            <div className="align-center m-auto mx-12 mt-4 max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text={nonProfitSection.textTwo}
                Style="normal"
              />
            </div>
          </div>
          <div className="align-center mt-10 hidden w-full flex-col gap-7 text-white lg:flex">
            <div className="align-center m-auto max-w-4xl text-center font-semibold">
              <Text
                Text={nonProfitSection.title}
                Style="small"
                TextClassProps=""
              />
            </div>
            <div className="align-center m-auto max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text={nonProfitSection.textOne}
                Style="normalCardHome"
              />
            </div>
            <div className="align-center m-auto max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text={nonProfitSection.textTwo}
                Style="normalCardHome"
              />
            </div>
          </div>
        </>

    )
}
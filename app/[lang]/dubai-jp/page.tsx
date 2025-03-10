'use client';

import ExportedImage from 'next-image-export-optimizer';

export default function DubaiInternshipPage() {
    return (
        <div className="relative -top-24">
            {/* Hero Section */}
            <section>
                <div className="relative bg-[#1e3a8a]"> {/* Darker background color */}
                    <ExportedImage
                        className="absolute object-cover opacity-40 w-full h-full"
                        src="/images/dubai-jp/burj-khalifa.webp"
                        alt="Burj Khalifa"
                        priority
                        fill
                        sizes="100vw"
                    />
                    <div className="relative flex flex-col items-center justify-center pb-12 pt-32 md:pb-48 md:pt-72">
                        <div className="max-w-xl px-8 text-center font-medium text-white md:max-w-4xl">
                            <h1 className="text-2xl font-medium leading-loose md:text-3xl md:leading-normal">
                                皆さん、こんにちは！🌍
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="relative -mb-24 bg-[#1e3a8a] py-12"> {/* Darker shade */}
                <div className="max-w-4xl mx-auto text-center text-lg text-white px-6">
                    <p className="mb-4">スタンフォード大学でAIを学んできた現在福井大学の博士課程学生のカンザダあみるです。Virufyという250人のボランティアスタッフがいるNPO法人の代表を務めています。私たちは音声分析を活用して、コロナなどを診断するAIアプリを開発しています。</p>
                    <p className="mb-4">このたび、ドバイの団体から支援を受け、2025年4月から1年間、医療AIプロジェクトの実証研究を実施予定です！🚀</p>
                    <p className="mb-4">そこで、アプリ・ウェブ・音声AI開発者や英語が話せる医療系の学生を募集しています！🧑‍⚕️💻 ビザ・渡航費・滞在費が支給されます！ ✈️🏨</p>
                    <p className="mb-4">このプロジェクトに参加することで、医療AIの最前線で活躍しながら、ハーバード大学・MIT・スタンフォード大学のチームと共にスキルを磨くことができます！🌎 また、国際的なキャリアチャンスを広げ、世界レベルでの仕事への道も開かれます！</p>
                </div>

                <div className="flex justify-center">
                    <a href="https://virufy.org/join-jp/" target="_blank" className="mt-6 inline-block bg-blue-500 px-6 py-3 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
                        応募する
                    </a>
                </div>
            </div>
        </div>
    );
}
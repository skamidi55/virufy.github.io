import {
  AdamLeipzig,
  AyomideOwoyemi,
  FaisalCheema,
  FumihikoYokota,
  HiroyukiKunishima,
  JureLeskovec,
  JesseBump,
  KaraMeister,
  KhwajaShaik,
  KoheiWakamiya,
  KutsunaSatoshi,
  LesAtlas,
  MadhavDatt,
  MarkHaseltine,
  MayXu,
  MelissaDyrdahl,
  MertPilanci,
  NobuyoOzawa,
  RafiAzimKhan,
  RichardNall,
  RokSosic,
  RonanDunlop,
  ShirinHasan,
  TamerFahmy,
  TetsujiMadarame,
  TsutomuIto,
  VictorWang,
  YukitoshiNakatani,
} from '@/public/images/advisors';
import { type People } from '../types/people';

const people: People = {
  titleImage: '私たちは世界中から団結し、咳一つ一つから感染症を克服します。',
  sectionMeetOurFounder: {
    titleMeetOurFounder: '創設者紹介',
    titleAmil: 'アミル・カンザダ',
    textAmil:
      '福井大学工学博士候補。元UCバークレー経営学修士＆工学修士（データサイエンス）共同学位プログラム学生。',
    button: 'アミルのストーリーを読む',
  },
  sectionAdvisors: {
    title: 'アドバイザー',
    advisors: [
      {
        img: KaraMeister,
        name: 'カラ・マイスター医学博士',
        role: '臨床アドバイザー',
        texts: ['スタンフォード医科大学耳鼻咽喉科臨床助教授'],
        link: 'https://www.linkedin.com/in/kara-meister-200335110/',
      },
      {
        img: JureLeskovec,
        name: 'ユーリ・レスコヴェック博士',
        role: '人工知能アドバイザー',
        texts: [
          'Pinterestチーフサイエンティスト',
          'スタンフォード大学AI准教授',
        ],
        link: 'https://www.linkedin.com/in/leskovec/',
      },
      {
        img: JesseBump,
        name: 'ジェシー・バンプ博士、MPH、FRSA',
        role: '公衆衛生アドバイザー',
        texts: [
          '国際保健・人口学部門',
          'ハーバードT.H.チャン公衆衛生大学院',
        ],
        link: 'https://www.hsph.harvard.edu/jesse-bump/',
      },
      {
        img: MelissaDyrdahl,
        name: 'メリッサ・ダイダール',
        role: 'エグゼクティブマーケティングアドバイザー',
        texts: [
          '元Adobe最高マーケティング責任者',
          'CommonSpirit Health理事会メンバー',
        ],
        link: 'https://dci.stanford.edu/melissa-dyrdahl/',
      },
      {
        img: KutsunaSatoshi,
        name: '忽那賢志',
        role: 'エグゼクティブ・臨床アドバイザー',
        texts: ['感染制御医学講座(感染制御学)ー大阪大学'],
        link: 'https://www.med.osaka-u.ac.jp/eng/introduction/research/special/infection',
      },
      {
        img: MadhavDatt,
        name: 'マダブ・ダット',
        role: 'エグゼクティブ非営利アドバイザー',
        texts: ['Green the Gene創設者', '国連環境計画元青年代表', 'MBA、ハーバード・ビジネス・スクール'],
        link: 'https://www.linkedin.com/in/madhavdatt/',
      },
      {
        img: MayXu,
        name: 'メイ・シュウ',
        role: 'データ・AI製品戦略アドバイザー',
        texts: ['創設者 / エグゼクティブコーチ', 'MS- スタンフォード大学'],
        link: 'https://www.linkedin.com/in/may-xu-bb06934',
      },
      {
        img: RafiAzimKhan,
        name: 'ラフィ・アジム・カーン',
        role: 'エグゼクティブ法務アドバイザー',
        texts: [
          'ピルズベリーローレンスウィンショーLLP欧州データプライバシー部門リーダー、IP/ITパートナー',
        ],
        link: 'https://www.pillsburylaw.com/en/lawyers/rafi-azim-khan.html',
      },
      {
        img: RonanDunlop,
        name: 'ローナン・ダンロップ',
        role: 'エグゼクティブマーケティングアドバイザー',
        texts: [
          '元Pivotal/VMWareマーケティング責任者',
          'Cohumanマーケティング副社長',
        ],
        link: 'https://www.linkedin.com/in/rdunlop/',
      },
      {
        img: MarkHaseltine,
        name: 'マーク・ハセルトン',
        role: 'エグゼクティブアドバイザー',
        texts: ['元edX、GoDaddy CTO/CPO', 'MITコンピュータサイエンス卒業生'],
        link: 'https://www.linkedin.com/in/mhaseltine/',
      },
      {
        img: FaisalCheema,
        name: 'ファイサル・チーマ',
        role: 'エグゼクティブ・臨床アドバイザー',
        texts: [
          'ヒューストン大学ティルマン・フェルティッタ医科大学　生命医学・臨床科学准教授',
        ],
        link: 'https://www.linkedin.com/in/doccheema/',
      },
      {
        img: MertPilanci,
        name: 'メルト・ピランチ',
        role: '人工知能アドバイザー',
        texts: ['スタンフォード大学電気工学AI助教授'],
        link: 'https://stanford.edu/~pilanci/',
      },
      {
        img: TetsujiMadarame,
        name: '斑目哲司',
        role: 'Pプリンシパルフェロー・技術計画・日本郵船',
        texts: [
          'theDOCK 海事・物流テックVC 投資諮問委員会　取締役',
          'MBA - スタンフォード経営大学院',
        ],
        link: 'https://www.linkedin.com/in/tetsuji-madarame-6a337916b',
      },
      {
        img: YukitoshiNakatani,
        name: '中谷幸俊',
        role: '日本エグゼクティブ・アドバイザー',
        texts: [
          'ITバリューコンサルティング社　CEO',
          'アクセンチュア日本法人　元ディレクター',
        ],
        link: 'https://www.facebook.com/nakatani.yukitoshi',
      },
      {
        img: VictorWang,
        name: 'ヴィクター・ワン',
        role: 'エグゼクティブアドバイザー',
        texts: [
          'China Silicon Valley創設者兼会長',
          'スタンフォード経営大学院MBA',
        ],
        link: 'https://www.linkedin.com/in/executivestanfordvictorwang/',
      },
      {
        img: AdamLeipzig,
        name: "アダム・ライプツィッヒ",
        role: "エグゼクティブアドバイザー",
        texts: [
          "Entertainment Media PartnersのCEO",
          "元National Geographic Filmsの社長",
          "バークレーのハースビジネススクールの専門教授"
        ],
        link: "https://www.linkedin.com/in/adamleipzig/"
      },      
      {
        img: RokSosic,
        name: 'ロック・ソシック',
        role: '人工知能アドバイザー',
        texts: ['スタンフォード工学部シニアリサーチエンジニア'],
        link: 'https://scholar.google.com/citations?user=xlZ4YJcAAAAJ&hl=en&oi=ao',
      },
      {
        img: RichardNall,
        name: 'リチャード・ノール',
        role: 'マーケティイングアドバイザー',
        texts: [
          'CEO - The Brand Garden',
          'Henleyビジネススクール - 組織リーダーシップ修士号',
        ],
        link: 'https://www.linkedin.com/in/richardnall/',
      },
      {
        img: KhwajaShaik,
        name: 'クワジャ・シャイク',
        role: 'IBM最高技術責任者',
        texts: [
          'MOSH副会長、取締役会メンバー',
          'ノースフロリダ大学コンピューティング理事会メンバー',
        ],
        link: 'https://www.linkedin.com/in/khwajashaik/',
      },
      {
        img: AyomideOwoyemi,
        name: 'アヨミデ・オウォイェミ',
        role: 'エグゼクティブ・臨床アドバイザー',
        texts: [
          'イリノイシカゴ大学　生命医科学博士号',
          'One Young World　ナイジェリア大使',
        ],
        link: 'https://www.linkedin.com/in/ayomide-owoyemi/',
      },
      {
        img: TsutomuIto,
        name: '伊藤勉',
        role: 'エグゼクティブビジョナリーアドバイザー',
        texts: ['Tannan FMラジオ創設者', '新幹線主任設計者'],
        link: 'http://tannan.fm/contents/about-us.html',
      },
      {
        img: LesAtlas,
        name: 'レス・アトラス博士',
        role: 'オーディオおよび機械学習アドバイザー',
        texts: [
          'ワシントン大学電気・コンピュータ工学教授',
          'スタンフォード大学電気工学博士',
        ],
        link: 'https://people.ece.uw.edu/atlas/',
      },
      {
        img: NobuyoOzawa,
        name: '小澤信代',
        role: '日本臨床開発リード',
        texts: ['臨床開発部グループマネージャー'],
        link: 'https://www.linkedin.com/in/nobuyo-ozawa-223707113',
      },
      {
        img: HiroyukiKunishima,
        name: '國島広之',
        role: '感染症アドバイザー',
        texts: ['感染症学講座聖マリアンナ医科大学病院'],
        link: 'http://www.k-icnet.org/profile.html',
      },
      {
        img: FumihikoYokota,
        name: '横田文彦',
        role: '公衆衛生アドバイザー',
        texts: ['疫学准教授　九州大学'],
        link: 'https://q-aos.kyushu-u.ac.jp/en/staff/1770/',
      },
      {
        img: KoheiWakamiya,
        name: '若宮 耕平',
        role: '音声AI顧問',
        texts: [
          '音声AIアドバイザー',
          '九州大学'
        ],
        link: 'https://hyoka.ofc.kyushu-u.ac.jp/html/100021188_ja.html',
      },
      {
        img: TamerFahmy,
        name: 'タマー・ファーミー',
        role: '中東・アフリカ市場アドバイザー',
        texts: [
          '元ドレーゲル/フィリップス メドテック - 睡眠と呼吸器ケア',
          'MBA SP ジェイン グローバル マネジメントスクール',
          'BSc 生物医学工学 カイロ大学',
        ],
        link: 'https://ae.linkedin.com/in/tamer-fahmy-b4468614',
      },
      {
        img: ShirinHasan,
        name: 'シリン・ハサン',
        role: '規制業務アドバイザー',
        texts: [
          '元メドトロニック臨床業務責任者',
          '理学修士（生化学）、サンノゼ州立大学 / スタンフォード大学',
        ],
        link: 'https://www.linkedin.com/in/shirinhasan/',
      },
    ],
  },
};

export default people;

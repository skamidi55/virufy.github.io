import Head from 'next/head';

const StudyApp = () => {
  return (
    <>
      <Head>
        <title>Study App</title>
      </Head>
      <iframe
        src="/study-app/index.html#/welcome"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Study App"
      />
    </>
  );
};

export default StudyApp;

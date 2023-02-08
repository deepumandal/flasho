import Head from 'next/head';
import { ReactElement, useEffect } from 'react';
import Favicon from '../components/favicon/Favicon';
import Main from '../components/layout/main/Main';
import TriggerMenu from '../components/trigger-menu';
import design from '../styles/PageDefault.module.scss';

const Home = () => {
  return (
    <div className={design.container}>
      <Head>
        <title>Flasho App</title>
        <meta
          name="description"
          content="A one stop for all notifications - sms, emails & notifications"
        />
        <Favicon />
      </Head>
      <TriggerMenu mode={'Email'} />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Main>{page}</Main>;
};

export default Home;

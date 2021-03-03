import Head from 'next/head';
import React from 'react';
import SvelteLogo from '../components/logos/SvelteLogo';
import KotlinLogo from '../components/logos/KotlinLogo';
import NextJSLogo from '../components/logos/NextJSLogo';
import ReactLogo from '../components/logos/ReactLogo';
import TypeScriptLogo from '../components/logos/TypeScriptLogo';

function Home() {
  return (
    <>
      <Head>
        <title>Luke Shay</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="bg-gray-100 pt-20 md:pt-22">
          <div className="flex w-full justify-center">
            <div className="text-center max-w-screen-md">
              <h1 className="tracking-tight font-medium leading-tight w-full">
                Student at Iowa State University{' '}
                <span className="sm:block text-cyan-500 font-medium">
                  studying software engineering
                </span>
              </h1>
              <p className="mt-6">
                My website is a work in progress, therefore this page has not been finished yet.
                Please check out my projects and resume which can be found on the navigation bar!
              </p>
            </div>
          </div>
          <div
            className="bg-wave bg-center bg-repeat-x -mb-8 md:hidden"
            style={{ height: '142.5px', backgroundSize: '1080px 142.5px' }}
          />
          <div
            className="bg-wave bg-center bg-repeat-x -mb-8 hidden md:block mt-8"
            style={{ height: '190px', backgroundSize: '1440px 190px' }}
          />
        </div>
        <div className="w-full pt-14 md:pt-20">
          <div className="flex w-full justify-center">
            <div className="text-center w-full max-w-screen-md mx-12 md:mx-0">
              <h1 className="tracking-tight font-medium leading-tight w-full pb-4">
                I am currently using
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-14">
                <div className="col-span-1 flex justify-center items-center">
                  <ReactLogo className="max-h-28" />
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <NextJSLogo className="max-h-28" />
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <SvelteLogo className="max-h-28" />
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <TypeScriptLogo className="max-h-28" />
                </div>
                <div className="col-span-2 md:col-span-1 flex justify-center items-center">
                  <KotlinLogo className="max-h-28" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

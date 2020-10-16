import Head from 'next/head';
import React from 'react';
import DenoLogo from '../components/logos/DenoLogo';
import GraphQLLogo from '../components/logos/GraphQLLogo';
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
                <span className="sm:block text-indigo-500 font-medium">
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
        <div className="w-full mt-14 md:mt-20">
          <div className="flex w-full justify-center">
            <div className="text-center w-full max-w-screen-md mx-12 md:mx-0">
              <h1 className="tracking-tight font-medium leading-tight w-full">
                I am currently exploring
              </h1>
              <div className="block md:flex w-full items-center justify-between">
                <div className="flex w-full mt-6 md:w-2/5 justify-center">
                  <div className="w-1/2 flex justify-center">
                    <ReactLogo size={150} />
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <NextJSLogo size={120} />
                  </div>
                </div>
                <div className="flex w-full mt-6 md:w-2/5 justify-center">
                  <div className="w-1/2 flex justify-center">
                    <DenoLogo size={99} />
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <TypeScriptLogo size={78} />
                  </div>
                </div>
                <div className="flex w-full mt-6 md:w-1/5 justify-center">
                  <div className="w-full flex justify-center">
                    <GraphQLLogo size={80} />
                  </div>
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

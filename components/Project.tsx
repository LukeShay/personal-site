import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ChildrenProps from './ChildrenProps';
import { Meta } from '../lib/meta';
import { projects } from '../lib/projects';
import Layout from './Layout';

interface PostProps extends ChildrenProps {
  meta: Meta;
}

function Project({ children, meta }: PostProps) {
  const router = useRouter();

  return (
    <Layout title={meta.title}>
      <div className="w-full flex">
        <div className="w-1/4 -mt-8 p-4">
          <nav className="w-full">
            <ul>
              {projects.map((project) => (
                <li key={project.path}>
                  <Link href={project.path}>
                    <a
                      className={`inline-block text-sm px-4 py-2 ${
                        router.pathname === project.path
                          ? 'text-indigo-500 font-bold'
                          : 'text-gray-700'
                      } hover:text-indigo-500 leading-none rounded mr-4 transition duration-150 ease-in-out`}
                    >
                      {project.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-1/2">
          <article className="w-full">
            <div className="w-full text-center">
              <h1 className="w-full">{meta.title}</h1>
              <h5 className="w-full">{meta.description}</h5>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-4xl text-left m-4">{children}</div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}

export default Project;

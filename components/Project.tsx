import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ChildrenProps from './ChildrenProps';
import Meta from '../lib/meta';
import projects from '../lib/projects';
import Layout from './Layout';

interface PostProps extends ChildrenProps {
  meta: Meta;
}

function Project({ children, meta }: PostProps) {
  const router = useRouter();

  return (
    <Layout title={meta.title}>
      <div className="w-full flex">
        <div className="w-1/6 -mt-4">
          <nav className="w-full">
            <ul className="list-none">
              {projects.map((project) => (
                <li key={project.path}>
                  <Link href={project.path}>
                    <a
                      className={`inline-block text-sm py-2 leading-none ${
                        router.pathname === project.path
                          ? 'text-indigo-500 font-bold'
                          : 'text-gray-700'
                      } hover:text-indigo-500 transition duration-150 ease-in-out`}
                    >
                      {project.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-2/3">
          <article className="w-full">
            <div className="w-full text-center">
              <h1 className="w-full">{meta.title}</h1>
              <h5 className="w-full">{meta.description}</h5>
            </div>
            {children}
          </article>
        </div>
      </div>
    </Layout>
  );
}

export default Project;

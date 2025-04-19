import Hero from '@/components/Hero';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Sample featured projects
  const featuredProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: '/placeholder.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      slug: 'ecommerce-platform'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Real-time weather information using OpenWeatherMap API',
      image: '/placeholder.jpg',
      tags: ['React', 'API', 'CSS'],
      slug: 'weather-app'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A collaborative task management system with real-time updates',
      image: '/placeholder.jpg',
      tags: ['Next.js', 'Firebase', 'Tailwind'],
      slug: 'task-management'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore some of my recent work
          </p>
        </div>
        
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="relative w-full h-48">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  View Project
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/projects" className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-500">
            View all projects
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

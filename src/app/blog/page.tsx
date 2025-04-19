import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | My Portfolio',
  description: 'Read my latest articles and insights',
};

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to set up your first Next.js project with TypeScript and Tailwind CSS.',
      date: 'June 15, 2023',
      image: '/placeholder.jpg',
      readTime: '5 min read',
      slug: 'getting-started-with-nextjs'
    },
    {
      id: 2,
      title: 'The Power of Tailwind CSS',
      excerpt: 'Discover why Tailwind CSS is becoming the preferred styling solution for modern web development.',
      date: 'July 22, 2023',
      image: '/placeholder.jpg',
      readTime: '7 min read',
      slug: 'power-of-tailwind-css'
    },
    {
      id: 3,
      title: 'Building Accessible Web Applications',
      excerpt: 'Accessibility tips and best practices to make your web applications usable by everyone.',
      date: 'August 10, 2023',
      image: '/placeholder.jpg',
      readTime: '8 min read',
      slug: 'building-accessible-web-applications'
    },
    {
      id: 4,
      title: 'State Management in React',
      excerpt: 'Comparing different state management solutions for React applications.',
      date: 'September 5, 2023',
      image: '/placeholder.jpg',
      readTime: '10 min read',
      slug: 'state-management-in-react'
    }
  ];

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          My Blog
        </h1>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          I write about web development, UI/UX design, and my journey as a developer.
        </p>
      </div> 
      
      <div className="grid gap-8 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.id} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
                Article
              </span>
              <span className="text-sm">{post.readTime}</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image 
                    src="/avatar.jpg" 
                    alt="Author avatar" 
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <span className="font-medium dark:text-white">
                  Me
                </span>
              </div>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                Read more
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 
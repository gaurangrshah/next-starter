/**
 * * This file is a configuration file for the 'next-seo' plugin
 * README: https://tinyurl.com/y55lbgdh
 * blog-instructions: https://tinyurl.com/yy8wjlep
 */

const BASE_URL = 'https://<site-path>.vercel.app';

const title = 'Next Chakra Starter';
const description = 'Next.js with Chakra UI Starter Template';

const SEO = {
  title,
  description,
  url: `${BASE_URL}`,
  canonical: `${BASE_URL}`,
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${BASE_URL}`,
    title,
    description,
    images: [
      {
        url: `${BASE_URL}/static/images/logo.png`,
        alt: title,
        width: 1280,
        height: 720
      }
    ],
    site_name: `${title}`
  }
};

export default SEO;

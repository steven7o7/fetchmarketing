import { Helmet } from 'react-helmet-async';

/**
 * SEO component for managing meta tags, Open Graph, and Twitter cards
 */
export default function SEO({
  title = 'FetchMarketing - AI-Driven Marketing for Service Businesses',
  description = 'Creative studio specializing in AI-driven marketing strategies, branding, and digital experiences for service businesses.',
  image = '/assets/project1.webp',
  url = 'https://fetchmarketing.com',
  type = 'website'
}) {
  const fullTitle = title.includes('FetchMarketing') ? title : `${title} | FetchMarketing`;
  const fullUrl = url.startsWith('http') ? url : `https://fetchmarketing.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://fetchmarketing.com${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="FetchMarketing" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="FetchMarketing" />
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}

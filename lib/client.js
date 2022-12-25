import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'khb5cp2m',
  dataset: 'production',
  apiVersion: '2022-12-25',
  useCdn: true,
  token: process.env.TECHX_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
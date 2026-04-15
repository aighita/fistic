import { generateSocialImage, size } from '@/lib/social-image';

export const alt = 'FISTIC Craiova - clatite fine si mini-gogosi';
export const contentType = 'image/png';
export { size };
export const runtime = 'nodejs';

export default async function Image() {
  return generateSocialImage('twitter');
}

import { generateSocialImage, size } from '@/lib/social-image';

export const alt = 'FISTIC - clătite fine și mini-gogoși';
export const contentType = 'image/png';
export { size };
export const runtime = 'nodejs';

export default async function Image() {
  return generateSocialImage('twitter');
}

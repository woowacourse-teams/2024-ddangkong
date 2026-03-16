import { http, HttpResponse } from 'msw';

import { MOCK_API_URL } from '@/constants/url';

const MOCK_PROFILE_IMAGE_PATH = '/src/assets/images/sillyDdangkongMedium.webp';

const getProfileImageHandler = () => {
  return HttpResponse.redirect(MOCK_PROFILE_IMAGE_PATH);
};

export const imageHandler = [http.get(MOCK_API_URL.profileImage, getProfileImageHandler)];

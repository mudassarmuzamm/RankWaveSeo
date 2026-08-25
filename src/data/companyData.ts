export interface ScheduleDay {
  day: string;
  hours: string;
  isOpen: boolean;
  note?: string;
}

export const COMPANY_INFO = {
  name: 'RankWave SEO',
  legalName: 'RankWave SEO Digital Agency',
  founder: 'Mudassar Ali',
  email: 'mudasaralip726@gmail.com',
  phone: '0312 4038455',
  phoneFormatted: '+92 312 4038455',
  phoneTel: '+923124038455',
  whatsappUrl: 'https://wa.me/923124038455',
  
  address: {
    full: 'Garden, Barkat Market, 9 New, Aibak Block, Garden Town, Aibak Block Town, Lahore, 54600',
    street: 'Garden, Barkat Market, 9 New, Aibak Block, Garden Town, Aibak Block Town',
    city: 'Lahore',
    region: 'Punjab',
    postalCode: '54600',
    country: 'Pakistan',
    countryCode: 'PK',
  },

  socials: {
    facebook: 'https://www.facebook.com/rankwaveseo',
    pinterest: 'https://www.pinterest.com/rankwaveseo',
  },

  googleMeet: {
    url: 'https://meet.google.com/',
    duration: '30 min',
    title: 'RankWave SEO 1-on-1 Growth Consultation',
    description: 'Complimentary 30-minute organic search strategy session with Mudassar Ali on Google Meet.',
  },

  openingHours: [
    { day: 'Monday', hours: 'Open 24 hours', isOpen: true },
    { day: 'Tuesday', hours: 'Open 24 hours', isOpen: true, note: 'Mawlid' },
    { day: 'Wednesday', hours: '12:00 AM – 1:00 AM', isOpen: true, note: 'Mawlid (Hours might differ)' },
    { day: 'Thursday', hours: 'Open 24 hours', isOpen: true },
    { day: 'Friday', hours: 'Closed', isOpen: false },
    { day: 'Saturday', hours: 'Closed', isOpen: false },
    { day: 'Sunday', hours: 'Open 24 hours', isOpen: true },
  ] as ScheduleDay[],
};

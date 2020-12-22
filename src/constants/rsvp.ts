export const LABEL: {
  [key: string]: string;
} = {
  attendanceYes: 'ACCEPT WITH PLEASURE',
  attendanceNo: 'DECLINE WITH REGRET',
  firstName: 'FIRST NAME',
  lastName: 'LAST NAME',
  title: 'TITLE',
  titleOther: 'PLEASE SPECIFY',
  kidsMenu: 'KIDS MENU PREFERRED',
  diet: 'DIETARY RESTRICTIONS',
  address: 'POSTAL ADDRESS',
  postcode: 'POSTCODE',
  phone: 'PHONE NUMBER',
  bus: 'DO YOU REQUIRE A SEAT/SEATS ON THE 3.45 PM BUS FROM MATIATIA WHARF TO MUDBRICK?',
  stay: 'ARE YOU STAYING ON WAIHEKE ISLAND AFTER THE RECEPTION?',
  stayAddress: 'LET US KNOW THE ADDRESS OF YOUR ACCOMMODATION SO WE CAN ARRANGE YOUR TRANSPORT.',
  bbq: 'WOULD YOU LIKE TO JOIN A BEACH BBQ LUNCH IN AUCKLAND ON THE DAY AFTER THE WEDDING?',
  question: 'PLEASE LET US KNOW IF YOU HAVE ANY QUESTIONS OR COMMENTS.',
};

export const RSVP_ITEMS = Object.keys(LABEL);

export const GUEST_INFO = {
  firstName: '',
  lastName: '',
  title: '',
  titleOther: '',
  kidsMenu: false,
  diet: '',
};

export const CONTROLLED_INPUT = Object.keys(GUEST_INFO);

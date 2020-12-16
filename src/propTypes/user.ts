export type UserProps = {
  recipients: {
    firstName: string;
    lastName: string;
    title: string;
  }[];
  hasKids: boolean;
  rsvp: RsvpProps;
} | null;

export type RsvpProps = {
  [key: string]: any;
  attendance: string;
  guests?: GuestProps[];
  address?: string;
  postcode?: string;
  phone?: string;
  stay?: string;
  stayAddress?: string;
  bbq?: string;
  question?: string;
  message?: string;
};

export type GuestProps = {
  [key: string]: any;
  firstName: string;
  lastName: string;
  title: string;
  titleOther: string;
  kidsMenu: boolean;
  diet: string;
};

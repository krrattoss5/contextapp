import {create} from 'zustand';

export interface ProfileState {
  name: string;
  email: string;

  changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
  name: 'Jon Doe',
  email: 'jondoe@gmail.com',

  changeProfile: (name: string, email: string) => {
    console.log('====================================');
    console.log(get());
    console.log('====================================');
    set({name, email});
  },
}));

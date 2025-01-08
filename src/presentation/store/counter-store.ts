import {create} from 'zustand';

interface CounterState {
  count: number;

  incrementBy: (value: number) => void;
  decrementBy: (value: number) => void;
}

export const useCountetStore = create<CounterState>()((set, get) => ({
  count: 0,

  incrementBy: value => {
    // set(state => ({count: state.count + value}));
    set({count: get().count + value});
  },
  decrementBy: value => {
    set(state => ({count: state.count - value}));
    // set({count: get().count - value});
  },
}));

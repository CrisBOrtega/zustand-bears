import { create } from 'zustand';

interface BearState {
    blackBears: number;
    polarBears: number;
    pandaBears: number;
    increaseBlackBears: (by: number) => void;
    //decrease: () => void;
}

export const useBearStore = create<BearState>((set) => ({
    blackBears: 10,
    polarBears: 5,
    pandaBears: 1,
    increaseBlackBears: (by:number) => set((state) => ({ blackBears: state.blackBears + by })),
    //decrease: () => set((state) => ({ blackBears: state.blackBears - 1 })),
}));

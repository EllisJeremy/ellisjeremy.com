import { create } from 'zustand';

interface ModalState {
  modal: boolean;
  setModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modal: false,
  setModal: () => set((state) => ({modal: !state.modal})),
}));

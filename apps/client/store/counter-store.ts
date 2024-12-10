'use client';
import { createStore } from 'zustand';

interface CounterState {
  unreadCount: number;
}
interface CounterActions {
  increment: () => void;
  decrement: () => void;
}

export type CounterStore = CounterState & CounterActions;

export const defaultInitState: CounterState = {
  unreadCount: 0,
};
export const createCounterStore = (
  initState: CounterState = defaultInitState
) => {
  return createStore<CounterStore>()(set => ({
    ...initState,
    decrement: () => set(state => ({ unreadCount: state.unreadCount - 1 })),
    increment: () => set(state => ({ unreadCount: state.unreadCount + 1 })),
  }));
};

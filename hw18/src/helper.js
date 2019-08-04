export const include = (state, item) =>
  state.includes(item) ? state : [...state, item];

export const exclude = (state, item) => state.filter(el => el !== item);

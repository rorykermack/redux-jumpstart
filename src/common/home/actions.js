/* === Consts === */
export const REGISTER = 'REGISTER';

/* --- Actions --- */
export function home_register(is) {
  return {
    type: 'REGISTER',
    payload: {
      is: is
    }
  }
}

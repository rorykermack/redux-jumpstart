/* === Consts === */
export const REGISTER = 'REGISTER';

/* --- Actions --- */
export function homeRegister(is) {
  return {
    type: 'REGISTER',
    payload: {
      is: is
    }
  }
}

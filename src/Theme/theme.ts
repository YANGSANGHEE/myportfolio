const flexSet = {
  flexRowCenter: `
    display:flex;
    align-items:center;
    justify-content: center;
  `,
  flexColumnCenter: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  flexColumnJcAs: `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  `,
};
export const theme = {
  flexSet,
};
export type Theme = typeof theme;

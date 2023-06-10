import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    extend: {
      animation: {
        "clip-from-top-animation": "clip 1s ease-in-out 4s forwards",
      },
      keyframes: {
        "clip": {
          "0%": { 'clip-path': "ellipse(10% 10% at 50% 50%)" },
          "100%": { 'clip-path': "ellipse(50% 50% at 50% 100%)" },
        },
      },
    },
  },
});

// this was created to add the ellispe animation to the boat video 


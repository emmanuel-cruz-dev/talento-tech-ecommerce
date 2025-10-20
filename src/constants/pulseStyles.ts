export const pulseStyle = {
  animation: "pulse 2s ease-in-out infinite",
};

export const pulseKeyframes = `
    @keyframes pulse {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.05); }
      100% { opacity: 1; transform: scale(1); }
    }
  `;

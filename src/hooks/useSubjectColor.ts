const colorPalette = [
  "white",
  "blue",
  "orange",
  "green",
  "violet",
  "rose",
  "purple",
  "emerald",
  "indigo",
  "amber",
  "lime",
  "pink",
  "cyan",
  "sky",
  "fuchsia",
  "yellow",
  "teal",
];

const subjectColorMap: Record<string, string> = {};

let currentIndex = 0;

export const getColorForSubject = (subject: string): string => {
  if (!subjectColorMap[subject]) {
    subjectColorMap[subject] = colorPalette[currentIndex];
    currentIndex = (currentIndex + 1) % colorPalette.length;
  }
  return subjectColorMap[subject];
};

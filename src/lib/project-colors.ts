const overlayColors = ["#ff3b30", "#ff9500", "#ffd60a", "#34c759", "#0a84ff", "#af52de", "#ff2d55"];

export function colorForProject(slug: string) {
  return overlayColors[[...slug].reduce((total, character) => total + character.charCodeAt(0), 0) % overlayColors.length];
}

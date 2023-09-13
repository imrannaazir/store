export default function useIcon(jsx: string) {
  const extractedIconName = jsx
    .replace(/<([^>]+)\/>/, "$1")
    .trim()
    .toLowerCase();
  return extractedIconName;
}

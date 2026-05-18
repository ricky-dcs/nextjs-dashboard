// Example: Declare that importing any *.css file returns an object
// mapping class names to unique class strings (CSS modules).
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
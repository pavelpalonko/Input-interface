// These modules declarations ensure correct work of css modules with typescript
declare module '*.module.css';
declare module '*.module.scss';
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.png'
declare module '*.jpg'
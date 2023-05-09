import React from 'react';
import { IconProps } from './propTypes';

const NodesIcon: React.FC<IconProps> = ({
  color = '#151F4E',
}) => {
  const svgRef = React.useRef<SVGSVGElement | null>(null);
  
  React.useEffect(() => {
    svgRef.current?.querySelectorAll('path').forEach((path) => {
      path.setAttribute('fill', color);
      path.setAttribute('fill-opacity', '1');
    })
  }, [color]);

  return (
    <svg ref={svgRef} width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.5132 0.595947H1.70459C0.883691 0.595947 0.218262 1.30979 0.218262 2.19041V6.9738C0.218262 7.85439 0.883691 8.56827 1.70459 8.56827H22.5132C23.334 8.56827 23.9995 7.85439 23.9995 6.9738V2.19041C23.9995 1.30979 23.334 0.595947 22.5132 0.595947ZM23.2563 6.9738C23.2563 7.41336 22.923 7.77103 22.5132 7.77103H1.70459C1.29481 7.77103 0.961426 7.41336 0.961426 6.9738V2.19041C0.961426 1.75078 1.29481 1.39318 1.70459 1.39318H22.5132C22.923 1.39318 23.2563 1.75078 23.2563 2.19041V6.9738Z" fill="#151F4E" fillOpacity="0.56"/>
      <path d="M23.2563 6.9738C23.2563 7.41336 22.923 7.77103 22.5132 7.77103H1.70459C1.29481 7.77103 0.961426 7.41336 0.961426 6.9738V2.19041C0.961426 1.75078 1.29481 1.39318 1.70459 1.39318H22.5132C22.923 1.39318 23.2563 1.75078 23.2563 2.19041V6.9738Z" fill="#151F4E" fillOpacity="0.56"/>
      <path d="M22.5132 11.8319H1.70459C0.883691 11.8319 0.218262 12.5458 0.218262 13.4264V18.2098C0.218262 19.0903 0.883691 19.8042 1.70459 19.8042H22.5132C23.334 19.8042 23.9995 19.0903 23.9995 18.2098V13.4264C23.9995 12.5458 23.334 11.8319 22.5132 11.8319ZM23.2563 18.2098C23.2563 18.6493 22.923 19.007 22.5132 19.007H1.70459C1.29481 19.007 0.961426 18.6493 0.961426 18.2098V13.4264C0.961426 12.9867 1.29481 12.6291 1.70459 12.6291H22.5132C22.923 12.6291 23.2563 12.9867 23.2563 13.4264V18.2098Z" fill="#151F4E" fillOpacity="0.56"/>
      <path d="M23.2563 18.2098C23.2563 18.6493 22.923 19.007 22.5132 19.007H1.70459C1.29481 19.007 0.961426 18.6493 0.961426 18.2098V13.4264C0.961426 12.9867 1.29481 12.6291 1.70459 12.6291H22.5132C22.923 12.6291 23.2563 12.9867 23.2563 13.4264V18.2098Z" fill="#151F4E" fillOpacity="0.56"/>
      <path d="M10.6226 4.18909H3.19095C2.98848 4.18909 2.82446 4.36504 2.82446 4.58228C2.82446 4.79949 2.98848 4.97544 3.19095 4.97544H10.6226C10.8251 4.97544 10.9891 4.79949 10.9891 4.58228C10.9891 4.36504 10.8251 4.18909 10.6226 4.18909Z" fill="white" stroke="white" strokeWidth="0.6"/>
      <path d="M19.912 5.77721C20.5275 5.77721 21.0264 5.24197 21.0264 4.58172C21.0264 3.92147 20.5275 3.38623 19.912 3.38623C19.2965 3.38623 18.7976 3.92147 18.7976 4.58172C18.7976 5.24197 19.2965 5.77721 19.912 5.77721Z" fill="white" stroke="white" strokeWidth="0.6"/>
      <path d="M10.6226 15.4248H3.19095C2.98848 15.4248 2.82446 15.6008 2.82446 15.818C2.82446 16.0352 2.98848 16.2112 3.19095 16.2112H10.6226C10.8251 16.2112 10.9891 16.0352 10.9891 15.818C10.9891 15.6008 10.8251 15.4248 10.6226 15.4248Z" fill="white" stroke="white" strokeWidth="0.6"/>
      <path d="M19.912 17.0134C20.5275 17.0134 21.0264 16.4782 21.0264 15.8179C21.0264 15.1577 20.5275 14.6224 19.912 14.6224C19.2965 14.6224 18.7976 15.1577 18.7976 15.8179C18.7976 16.4782 19.2965 17.0134 19.912 17.0134Z" fill="white" stroke="white" strokeWidth="0.6"/>
    </svg>
  );
};

export default NodesIcon;

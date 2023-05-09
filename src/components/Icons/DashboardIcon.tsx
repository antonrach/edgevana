import React from 'react';
import { IconProps } from './propTypes';

const DashboardIcon: React.FC<IconProps> = ({
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
    <svg ref={svgRef} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_542_827)">
      <path d="M8.49986 0.0909424H1.68167C0.804432 0.0909424 0.0908203 0.804554 0.0908203 1.6818V5.77271C0.0908203 6.65011 0.804432 7.36373 1.68167 7.36373H8.49986C9.37726 7.36373 10.0909 6.65011 10.0909 5.77271V1.6818C10.0909 0.804554 9.37726 0.0909424 8.49986 0.0909424Z" fill="#151F4E" fillOpacity="0.56"/>
      <path d="M8.49998 9.18176H1.6818C0.804554 9.18176 0.0909424 9.89537 0.0909424 10.7728V20.3182C0.0909424 21.1955 0.804554 21.9091 1.6818 21.9091H8.49998C9.37739 21.9091 10.091 21.1955 10.091 20.3182V10.7728C10.091 9.89537 9.37739 9.18176 8.49998 9.18176Z" fill="#151F4E" fillOpacity="0.56"/>
      <path d="M20.318 14.6362H13.4998C12.6224 14.6362 11.9088 15.3498 11.9088 16.2273V20.3182C11.9088 21.1954 12.6224 21.909 13.4998 21.909H20.318C21.1953 21.909 21.9089 21.1954 21.9089 20.3182V16.2273C21.9089 15.3498 21.1953 14.6362 20.318 14.6362Z" fill="#151F4E" fillOpacity="0.56"/>
      <path d="M20.318 0.0909424H13.4998C12.6224 0.0909424 11.9088 0.804554 11.9088 1.6818V11.2273C11.9088 12.1047 12.6224 12.8183 13.4998 12.8183H20.318C21.1953 12.8183 21.9089 12.1047 21.9089 11.2273V1.6818C21.9089 0.804554 21.1953 0.0909424 20.318 0.0909424V0.0909424Z" fill="#151F4E" fillOpacity="0.56"/>
      </g>
      <defs>
      <clipPath id="clip0_542_827">
      <rect width="21.8182" height="21.8182" fill="white" transform="translate(0.0908203 0.0909424)"/>
      </clipPath>
      </defs>
    </svg>
  );
};

export default DashboardIcon;

import React from 'react';
import { IconProps } from './propTypes';

const SetupIcon: React.FC<IconProps> = ({
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
    <svg ref={svgRef} width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.82523 2.53012C14.1694 4.93178 15.3336 0.495117 15.3336 0.495117C15.3336 0.495117 14.3161 6.05928 9.64107 8.33262C8.68773 8.80012 8.0919 9.04762 8.0919 9.04762L0.419401 5.30762L8.0919 2.16345C8.0919 2.16345 7.90857 2.10845 8.82523 2.53012ZM7.19357 18.8285L0.0527344 14.9601V6.97595L7.19357 10.6151V18.8285ZM8.8069 18.8285L15.9569 14.9601V6.97595L8.8069 10.6151V18.8285Z" fill="white"/>
    </svg>
  );
};

export default SetupIcon;

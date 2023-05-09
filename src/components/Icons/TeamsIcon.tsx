import React from 'react';
import { IconProps } from './propTypes';

const TeamsIcon: React.FC<IconProps> = ({
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
    <svg ref={svgRef} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.75C6.62391 21.75 2.25 17.3761 2.25 12C2.25 6.62391 6.62391 2.25 12 2.25C17.3761 2.25 21.75 6.62391 21.75 12C21.75 17.3761 17.3761 21.75 12 21.75ZM12 3.75C7.45312 3.75 3.75 7.45312 3.75 12C3.75 16.5469 7.45312 20.25 12 20.25C16.5469 20.25 20.25 16.5492 20.25 12C20.25 7.45078 16.5492 3.75 12 3.75Z" fill="#AFB2C0"/>
      <path d="M15.1721 13.6875C14.3565 13.6875 13.5685 13.3256 12.953 12.6689C12.3442 12.0086 11.9803 11.1595 11.9218 10.2633C11.8529 9.29297 12.1505 8.4 12.7599 7.74984C13.3693 7.09969 14.221 6.75 15.1721 6.75C16.1161 6.75 16.9707 7.10719 17.5782 7.75594C18.1857 8.40469 18.4908 9.30281 18.4219 10.2642C18.3623 11.1599 17.9985 12.0083 17.3907 12.6689C16.7747 13.3256 15.9872 13.6875 15.1721 13.6875ZM7.67911 13.845C6.28411 13.845 5.05739 12.5555 4.94489 10.9702C4.88724 10.1583 5.13942 9.40781 5.65599 8.85703C6.17255 8.30625 6.88505 8.01328 7.67864 8.01328C8.47224 8.01328 9.18427 8.31516 9.69755 8.86359C10.2108 9.41203 10.471 10.1677 10.4124 10.973C10.298 12.5559 9.07177 13.845 7.67911 13.845ZM19.7049 16.6537C19.6304 16.4334 19.449 16.1986 19.0852 15.9759C17.9855 15.3042 16.6327 14.9489 15.1721 14.9489C13.7391 14.9489 12.3488 15.3192 11.2566 15.9919C10.0261 16.7498 9.19927 17.8552 8.86599 19.1878C8.78724 19.5014 8.67239 20.085 8.79521 20.4117C10.7661 21.1612 12.9374 21.1956 14.931 20.5089C16.9246 19.8222 18.6141 18.4579 19.7054 16.6537H19.7049ZM7.67021 18.8142C8.00161 17.4919 8.70708 16.3894 9.80161 15.4978C9.85336 15.4551 9.8927 15.3993 9.91555 15.3363C9.93839 15.2732 9.94391 15.2052 9.93151 15.1392C9.91911 15.0733 9.88925 15.0119 9.84505 14.9615C9.80085 14.911 9.74392 14.8733 9.6802 14.8523C9.1177 14.6728 8.47552 14.5767 7.67911 14.5767C6.56255 14.5767 5.37708 14.8791 4.48505 15.4284C4.23192 15.5845 3.98349 15.6445 3.79224 15.698C4.56008 17.395 5.83345 18.8135 7.43817 19.7592L7.52208 19.7527C7.54043 19.4357 7.59004 19.1214 7.67021 18.8142Z" fill="#AFB2C0"/>
    </svg>
  );
};

export default TeamsIcon;

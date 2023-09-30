import React from "react";

function markerIconSvg(fill='#000000',stroke='black', width='27', height='30', path) {
  const markerSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  markerSvg.setAttribute('fill', `${fill}`);
  markerSvg.setAttribute('viewBox', '0 0 50 50');
  // markerSvg.setAttribute('stroke', `${stroke}`);
  markerSvg.setAttribute('width', `${width}`);
  markerSvg.setAttribute('height', `${height}`);

  iconPath.setAttribute(
    'd',
    "m34.092.91821c1.2103 1.2454 1.2103 3.2507 0 4.4749l-7.9795 8.2111 4.3487 19.398-2.8923 2.9974-7.9589-15.683-8 8.2322.7384 5.2137-2.1949 2.2375-3.6102-6.7124-6.5436-3.7361 2.1744-2.2797 5.1282.781 7.9384-8.1689-15.241-8.2533 2.9128-2.9763 18.851 4.4749 7.9795-8.2111c1.1487-1.2243 3.2-1.2243 4.3487 0z"
  );
  // iconPath.setAttribute('stroke-linecap', 'round');
  // iconPath.setAttribute('stroke-linejoin', 'round');
  // iconPath.setAttribute('stroke-width', '1');

  markerSvg.appendChild(iconPath);
  return markerSvg;


}

export default markerIconSvg;

 
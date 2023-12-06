import { THEME } from '@/utils/constant';
import styles from './DockerLogo.module.css';

interface Props {
  theme: THEME;
  className?: string;
  size?: number;
}

const DockerLogo = ({ className, theme, size = 128 }: Props) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1200 309"
      xmlSpace="preserve"
      enableBackground="new 0 0 1200 309" // ratio = 0.2575
      width={size}
      className={className}
    >
      <title>Docker</title>
      <path
        fill={theme === 'light' ? '#00084D' : '#E5F2FC'}
        d="M379.6,111.7c-2.3-16.7-11.5-31.2-28.1-44.3l-9.6-6.5l-6.4,9.7c-8.2,12.5-12.3,29.9-11,46.6
	c0.6,5.8,2.5,16.4,8.4,25.5c-5.9,3.3-17.6,7.7-33.2,7.4H1.7l-0.6,3.5c-2.8,16.7-2.8,69,30.7,109.1c25.5,30.5,63.6,46,113.4,46
	c108,0,187.8-50.3,225.3-141.9c14.7,0.3,46.4,0.1,62.7-31.4c0.4-0.7,1.4-2.6,4.2-8.6l1.6-3.3l-9.1-6.2
	C419.9,110.8,397.2,108.3,379.6,111.7L379.6,111.7z M240,0h-45.3v41.7H240V0z M240,50.1h-45.3v41.7H240V50.1z M186.4,50.1h-45.3
	v41.7h45.3V50.1z M132.9,50.1H87.6v41.7h45.3V50.1z M79.3,100.2H34v41.7h45.3V100.2z M132.9,100.2H87.6v41.7h45.3V100.2z
	 M186.4,100.2h-45.3v41.7h45.3V100.2z M240,100.2h-45.3v41.7H240V100.2z M293.6,100.2h-45.3v41.7h45.3V100.2z M569,90.8
	c-3.3,0-6.1,1.1-8.2,3.3c-2.2,2.2-3.3,5.1-3.3,8.4v56.5c-11.2-9.3-24.1-13.9-38.9-13.9c-17.1,0-31.7,6.2-43.8,18.6
	c-12.1,12.4-18.1,27.3-18.1,44.8s6.1,32.4,18.1,44.8c12.1,12.4,26.7,18.6,43.8,18.6c17.1,0,31.6-6.2,43.8-18.6
	c12.1-12.2,18.1-27.2,18.1-44.8V102.6c0-3.4-1.1-6.2-3.4-8.4C575,91.9,572.3,90.8,569,90.8z M554.5,223.9c-2,4.8-4.8,9-8.3,12.6
	c-3.5,3.6-7.6,6.5-12.3,8.6c-4.7,2.1-9.8,3.2-15.2,3.2c-5.4,0-10.5-1-15.3-3.2c-4.7-2.1-8.8-5-12.3-8.6c-3.5-3.6-6.2-7.8-8.2-12.6
	c-2-4.8-3-10-3-15.4s1-10.6,3-15.4c2-4.8,4.8-9,8.2-12.6c3.5-3.6,7.6-6.4,12.3-8.6c4.7-2.1,9.8-3.2,15.3-3.2c5.5,0,10.4,1,15.2,3.2
	c4.7,2.1,8.8,5,12.3,8.6s6.3,7.8,8.3,12.6c2,4.8,3,9.9,3,15.3C557.5,213.9,556.5,219,554.5,223.9L554.5,223.9z M1075.6,163.7
	c-12.2-12.4-26.9-18.6-43.8-18.6c-17,0-31.7,6.2-43.8,18.6c-12.1,12.4-18.1,27.3-18.1,44.8s6.1,32.4,18.1,44.8
	c12.1,12.4,26.7,18.6,43.8,18.6c15.6,0,29-5.1,40.5-15.4c2.2-2.3,3.3-5.2,3.3-8.5c0-3.3-1.1-6.2-3.3-8.4c-2.2-2.2-4.9-3.3-8.2-3.3
	c-2.9,0.1-5.4,1-7.6,3c-3.5,3-7.2,5.3-11.3,6.8c-4.1,1.5-8.5,2.3-13.4,2.3c-4.3,0-8.4-0.7-12.3-2c-3.9-1.4-7.6-3.3-10.8-5.7
	c-3.3-2.5-6.1-5.4-8.6-8.8c-2.4-3.4-4.3-7.2-5.5-11.4h87.6c3.2,0,6-1.1,8.2-3.3c2.3-2.2,3.4-5.1,3.4-8.4c0-8.8-1.5-16.9-4.5-24.4
	C1086.2,176.7,1081.7,169.9,1075.6,163.7L1075.6,163.7z M994.4,196.8c1.2-4.1,3-7.9,5.4-11.4c2.4-3.4,5.3-6.4,8.6-8.8
	c3.3-2.5,7-4.3,11-5.7c4-1.4,8.1-2,12.3-2c4.2,0,8.3,0.7,12.2,2c4,1.4,7.6,3.3,10.8,5.7c3.3,2.5,6.2,5.4,8.6,8.8
	c2.5,3.4,4.3,7.2,5.6,11.4H994.4L994.4,196.8z M1196.9,153.1c-2.1-2-4.7-3.6-7.8-4.8c-3.1-1.2-6.6-2-10.3-2.4
	c-3.7-0.5-7.2-0.7-10.5-0.7c-7.4,0-14.3,1.2-20.8,3.6s-12.5,5.9-18,10.4V157c0-3.3-1.1-6-3.4-8.3c-2.3-2.3-4.9-3.5-8.1-3.5
	c-3.2,0-6,1.2-8.2,3.5c-2.3,2.3-3.4,5.1-3.4,8.3v103.2c0,3.3,1.1,6,3.4,8.3c2.3,2.3,5,3.5,8.2,3.5c3.2,0,5.9-1.2,8.1-3.5
	c2.3-2.3,3.4-5.1,3.4-8.3v-51.6c0-5.5,1-10.7,3-15.5c2-4.8,4.8-9,8.3-12.6c3.5-3.6,7.6-6.4,12.3-8.5c4.7-2.1,9.8-3.1,15.2-3.1
	c5.4,0,10.5,1,15.2,2.8c1.8,0.8,3.5,1.3,4.9,1.3c1.6,0,3.1-0.3,4.5-0.9c1.4-0.6,2.6-1.5,3.7-2.5c1-1.1,1.9-2.3,2.5-3.8
	c0.6-1.4,0.9-3,0.9-4.6C1200,157.8,1199,155.1,1196.9,153.1L1196.9,153.1z M699.6,163.7c-12.2-12.4-26.9-18.6-43.8-18.6
	s-31.7,6.2-43.8,18.6c-12.1,12.4-18.1,27.3-18.1,44.8s6.1,32.4,18.1,44.8c12.1,12.4,26.7,18.6,43.8,18.6c17.1,0,31.6-6.2,43.8-18.6
	c12.1-12.2,18.1-27.2,18.1-44.8c-0.1-8.8-1.6-16.9-4.6-24.3C710.1,176.8,705.6,169.9,699.6,163.7z M691.6,223.9
	c-2,4.8-4.8,9-8.3,12.6c-3.5,3.6-7.6,6.5-12.3,8.6c-4.7,2.1-9.8,3.2-15.2,3.2c-5.4,0-10.5-1-15.3-3.2c-4.7-2.1-8.8-5-12.3-8.6
	c-3.5-3.6-6.2-7.8-8.2-12.6c-2-4.8-3-10-3-15.4s1-10.6,3-15.4c2-4.8,4.8-9,8.2-12.6c3.5-3.6,7.6-6.4,12.3-8.6
	c4.7-2.1,9.8-3.2,15.3-3.2c5.5,0,10.4,1,15.2,3.2c4.7,2.1,8.8,5,12.3,8.6s6.3,7.8,8.3,12.6c2,4.8,3,9.9,3,15.3
	C694.6,213.9,693.6,219,691.6,223.9L691.6,223.9z M957.2,156.9c0-1.6-0.3-3.1-0.9-4.5c-0.6-1.4-1.4-2.7-2.5-3.8
	c-1-1.1-2.3-2-3.7-2.5c-1.4-0.6-2.9-0.9-4.5-0.9c-2.3,0-4.4,0.6-6.2,1.8l-66.2,44v-88.3c0-3.3-1.1-6.1-3.4-8.4s-4.9-3.5-8.1-3.5
	s-6,1.2-8.2,3.5c-2.3,2.3-3.4,5.1-3.4,8.4V260c0,3.3,1.1,6.1,3.4,8.4c2.3,2.3,5,3.5,8.2,3.5s5.9-1.2,8.1-3.5
	c2.3-2.3,3.4-5.1,3.4-8.4v-40.9l13.5-9.1l51.1,58.7c2.1,2,4.7,3,7.7,3c1.6,0,3.1-0.3,4.5-0.9c1.4-0.6,2.6-1.5,3.7-2.5
	c1-1.1,1.9-2.3,2.5-3.8c0.6-1.4,0.9-3,0.9-4.5c0-3.1-1.1-5.8-3.2-8.3L906.5,197l46.4-30.8C955.8,164.2,957.2,161.1,957.2,156.9
	L957.2,156.9z M765.1,180.4c3.5-3.6,7.7-6.4,12.4-8.5c4.7-2.1,9.8-3.1,15.2-3.1c4.9,0,9.4,0.8,13.5,2.5c4.1,1.7,8.1,4.1,11.8,7.3
	c2.2,1.8,4.7,2.7,7.5,2.7c3.3,0,6.1-1.1,8.2-3.4c2.2-2.3,3.3-5.1,3.3-8.5c0-3.4-1.3-6.5-4-8.9c-11.4-10.3-24.8-15.4-40.4-15.4
	c-17.1,0-31.7,6.2-43.8,18.6c-12.1,12.4-18.1,27.3-18.1,44.8c0,17.5,6.1,32.4,18.1,44.8c12.1,12.4,26.7,18.6,43.8,18.6
	c15.5,0,29-5.1,40.4-15.4c2.4-2.5,3.7-5.4,3.7-8.7c0-3.3-1.1-6.2-3.3-8.4c-2.2-2.2-4.9-3.3-8.2-3.3c-2.8,0.1-5.2,0.9-7.3,2.5
	c-3.7,3.3-7.6,5.7-11.7,7.3c-4.1,1.6-8.6,2.4-13.5,2.4c-5.4,0-10.4-1-15.2-3.1c-4.7-2.1-8.9-4.9-12.4-8.5c-3.5-3.5-6.3-7.8-8.4-12.6
	c-2-4.8-3-10-3-15.5c0-5.5,1-10.7,3-15.5C758.8,188.2,761.6,184.1,765.1,180.4L765.1,180.4z"
      />
    </svg>
  );
};

export default DockerLogo;

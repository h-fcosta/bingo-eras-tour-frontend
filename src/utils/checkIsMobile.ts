export default function checkIsMobile() {
  const MOBILE_BREAKPOINT = 480;
  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

  return isMobile;
}

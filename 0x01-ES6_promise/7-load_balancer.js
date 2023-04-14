// write and export function named loadBalancer
const loadBalancer = (chinaDownload, USDownload) => Promise.race([chinaDownload, USDownload]);
export default loadBalancer;

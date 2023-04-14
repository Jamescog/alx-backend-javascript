// write and export function named loadBalancer
const loadBalancer = (chinaDownload, USDownload) => {
  return Promise.race([chinaDownload, USDownload]);
};
export default loadBalancer;

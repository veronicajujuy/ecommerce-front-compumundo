import cpus from "../data/cpus.json";
import gpus from "../data/gpus.json";
import rams from "../data/rams.json";

const getProductItem = (id) => {
  const foundCpu = cpus.find((item) => item.id == id);
  const foundGpu = gpus.find((item) => item.id == id);
  const foundRam = rams.find((item) => item.id == id);
  if (foundCpu) {
    let type = "cpu";
    return { found: foundCpu, type };
  } else if (foundGpu) {
    let type = "gpu";
    return { found: foundGpu, type };
  } else if (foundRam) {
    let type = "ram";
    return { found: foundRam, type };
  } else {
    return undefined;
  }
};

export default getProductItem;

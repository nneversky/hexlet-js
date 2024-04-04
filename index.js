export const ipToInt = (ipStr) => {
  let numIp = 0;
  const arrOkt = ipStr.split(".");
  let i = 3;
  arrOkt.forEach((num) => {
    numIp += num * 256 ** i--;
  });
  return numIp;
};

export const intToIp = (ipNum) => {
  let numIp = [];
  numIp.push(Math.floor(ipNum / 256 ** 3));
  ipNum -= numIp[0] * 256 ** 3;
  numIp.push(Math.floor(ipNum / 256 ** 2));
  ipNum -= numIp[1] * 256 ** 2;
  numIp.push(Math.floor(ipNum / 256));
  numIp.push(Math.floor((ipNum -= numIp[2] * 256)));

  return numIp.join('.');
};

// '128.32.10.1'
console.log(intToIp(4294967295));

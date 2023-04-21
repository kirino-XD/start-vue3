const baseSize = 16;
let fontSize = 16;
setRem();
function setRem(): void {
  const scale = document.documentElement.clientWidth / 1920;
  fontSize = baseSize * Math.min(scale, 2);
  document.documentElement.style.fontSize = fontSize + "px";
}
window.onresize = function () {
  setRem();
};

export function transformRem(value: number): number | Float64Array {
  return (value / 16) * fontSize;
}

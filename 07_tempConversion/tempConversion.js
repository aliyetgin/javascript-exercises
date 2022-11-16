const ftoc = function(f) {
  const c = (f - 32) * 0.5556;
  const rounded = Math.round(c * 10) / 10;
  console.log(rounded);
  return rounded;
};

const ctof = function(c) {
  const f = (c * 1.8) + 32;
  const rounded = Math.round(f * 10) / 10;
  console.log(rounded);
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

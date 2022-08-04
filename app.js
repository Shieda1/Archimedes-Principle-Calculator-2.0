// https://calculator.swiftutors.com/archimedes-principle-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const buoyantForceoftheBodyRadio = document.getElementById('buoyantForceoftheBodyRadio');
const objectDensityRadio = document.getElementById('objectDensityRadio');
const fluidDensityRadio = document.getElementById('fluidDensityRadio');
const volumeofDisplacedFluidRadio = document.getElementById('volumeofDisplacedFluidRadio');

let buoyantForceoftheBody;
const g = 9.80665;
let objectDensity = v1;
let fluidDensity = v2;
let volumeofDisplacedFluid = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

buoyantForceoftheBodyRadio.addEventListener('click', function() {
  variable1.textContent = '(ρf) Object Density (kg/m³)';
  variable2.textContent = '(ρ0) Fluid Density (kg/m³)';
  variable3.textContent = '(V) Volume of Displaced Fluid (m³)';
  objectDensity = v1;
  fluidDensity = v2;
  volumeofDisplacedFluid = v3;
  result.textContent = '';
});

objectDensityRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Buoyant Force of the Body (N)';
  variable2.textContent = '(ρ0) Fluid Density (kg/m³)';
  variable3.textContent = '(V) Volume of Displaced Fluid (m³)';
  buoyantForceoftheBody = v1;
  fluidDensity = v2;
  volumeofDisplacedFluid = v3;
  result.textContent = '';
});

fluidDensityRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Buoyant Force of the Body (N)';
  variable2.textContent = '(ρf) Object Density (kg/m³)';
  variable3.textContent = '(V) Volume of Displaced Fluid (m³)';
  buoyantForceoftheBody = v1;
  objectDensity = v2;
  volumeofDisplacedFluid = v3;
  result.textContent = '';
});

volumeofDisplacedFluidRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Buoyant Force of the Body (N)';
  variable2.textContent = '(ρf) Object Density (kg/m³)';
  variable3.textContent = '(ρ0) Fluid Density (kg/m³)';
  buoyantForceoftheBody = v1;
  objectDensity = v2;
  fluidDensity = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(buoyantForceoftheBodyRadio.checked)
    result.textContent = `Buoyant Force of the Body = ${computeBuoyantForceoftheBody().toFixed(2)} N`;

  else if(objectDensityRadio.checked)
    result.textContent = `Object Density  = ${computeObjectDensity().toFixed(2)} kg/m³`;

  else if(fluidDensityRadio.checked)
    result.textContent = `Fluid Density = ${computeFluidDensity().toFixed(2)} kg/m³`;

  else if(volumeofDisplacedFluidRadio.checked)
    result.textContent = `Volume of Displaced Fluid = ${computeVolumeofDisplacedFluid().toFixed(2)} m³`;
})

// calculation

function computeBuoyantForceoftheBody() {
  return (Number(objectDensity.value) - Number(fluidDensity.value)) * Number(volumeofDisplacedFluid.value) * g;
}

function computeObjectDensity() {
  return (Number(buoyantForceoftheBody.value) / (Number(volumeofDisplacedFluid.value) * g)) + Number(fluidDensity.value);
}

function computeFluidDensity() {
  return Number(objectDensity.value) - (Number(buoyantForceoftheBody.value) / (Number(volumeofDisplacedFluid.value) * g));
}

function computeVolumeofDisplacedFluid() {
  return Number(buoyantForceoftheBody.value) / ((Number(objectDensity.value) - Number(fluidDensity.value)) * g);
}
import { data, isCityCode, isAreaCode, isProvinceCode } from 'lcn';
import { randomInt } from 'ut2';

const provinces: typeof data = [];
const cities: typeof data = [];
const areas: typeof data = [];

data.forEach((item) => {
  if (isProvinceCode(item.code)) {
    provinces.push(item);
  } else if (isCityCode(item.code)) {
    cities.push(item);
  } else if (isAreaCode(item.code)) {
    areas.push(item);
  }
});

const cityAndAreas = [...cities, ...areas];

export const getRandomCityAndAreaCode = () => {
  return cityAndAreas[randomInt(0, cityAndAreas.length - 1)].code;
};

export const getRandomProvince = () => {
  return provinces[randomInt(0, provinces.length - 1)];
};

export const getRandomCity = () => {
  return cities[randomInt(0, cities.length - 1)];
};

export const getRandomArea = () => {
  return areas[randomInt(0, areas.length - 1)];
};

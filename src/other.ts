import Mock from 'mockjs';
import { randomInt } from 'ut2';
import { randomString } from 'util-helpers';
import { createUnifiedIdentifier } from './unifiedIdentifier.util';

// ref: https://www.npmjs.com/package/country-code
const countries = [
  { alpha2: 'AR', alpha3: 'ARG', cn: '阿根廷', en: 'Argentina' },
  { alpha2: 'AU', alpha3: 'AUS', cn: '澳大利亚', en: 'Australia' },
  { alpha2: 'BR', alpha3: 'BRA', cn: '巴西', en: 'Brazil' },
  { alpha2: 'CA', alpha3: 'CAN', cn: '加拿大', en: 'Canada' },
  { alpha2: 'CN', alpha3: 'CHN', cn: '中国', en: 'China' },
  { alpha2: 'FR', alpha3: 'FRA', cn: '法国', en: 'France' },
  { alpha2: 'DE', alpha3: 'DEU', cn: '德国', en: 'Germany' },
  { alpha2: 'IN', alpha3: 'IND', cn: '印度', en: 'India' },
  { alpha2: 'ID', alpha3: 'IDN', cn: '印度尼西亚', en: 'Indonesia' },
  { alpha2: 'IT', alpha3: 'ITA', cn: '意大利', en: 'Italy' },
  { alpha2: 'JP', alpha3: 'JPN', cn: '日本', en: 'Japan' },
  { alpha2: 'KR', alpha3: 'KOR', cn: '韩国', en: 'Korea, Republic of' },
  { alpha2: 'MX', alpha3: 'MEX', cn: '墨西哥', en: 'Mexico' },
  { alpha2: 'RU', alpha3: 'RUS', cn: '俄罗斯', en: 'Russian Federation' },
  { alpha2: 'SA', alpha3: 'SAU', cn: '沙特阿拉伯', en: 'Saudi Arabia' },
  { alpha2: 'ZA', alpha3: 'ZAF', cn: '南非', en: 'South Africa' },
  { alpha2: 'TR', alpha3: 'TUR', cn: '土耳其', en: 'Turkey' },
  { alpha2: 'GB', alpha3: 'GBR', cn: '英国', en: 'United Kingdom' },
  { alpha2: 'US', alpha3: 'USA', cn: '美国', en: 'United States' }
];

const currencies = [
  { code: 'USD', desc: '美元', symbol: '$', flagId: 'us' },
  { code: 'SGD', desc: '新加坡元', symbol: '$', flagId: 'sg' },
  { code: 'SEK', desc: '瑞典克朗', symbol: 'Kr', flagId: 'se' },
  { code: 'RUB', desc: '俄罗斯卢布', symbol: '₽', flagId: 'ru' },
  { code: 'NZD', desc: '新西兰元', symbol: '$', flagId: 'nz' },
  { code: 'NOK', desc: '挪威克朗', symbol: 'Kr', flagId: 'no' },
  { code: 'KHR', desc: '柬埔寨瑞尔', symbol: '៛', flagId: 'kh' },
  { code: 'JPY', desc: '日元', symbol: '¥', flagId: 'jp' },
  { code: 'HKD', desc: '港元', symbol: '$', flagId: 'cn' },
  { code: 'GBP', desc: '英镑', symbol: '£', flagId: 'gb' },
  { code: 'EUR', desc: '欧元', symbol: '€', flagId: 'eu' },
  { code: 'EGP', desc: '埃及镑', symbol: 'EGP', flagId: 'eg' },
  { code: 'DKK', desc: '丹麦克朗', symbol: 'Kr', flagId: 'dk' },
  { code: 'CNY', desc: '人民币元', symbol: '¥', flagId: 'cn' },
  { code: 'CHF', desc: '瑞士法郎', symbol: 'Fr', flagId: 'bl' },
  { code: 'CAD', desc: '加拿大元', symbol: '$', flagId: 'ca' },
  { code: 'AUD', desc: '澳大利亚元', symbol: '$', flagId: 'au' }
];

const provinceShortNames = '京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼';

/**
 * 获取随机国家
 */
export function getRandomCountry() {
  const index = randomInt(0, countries.length - 1);
  return countries[index];
}

/**
 * 获取随机货币
 */
export function getRandomCurrency() {
  const index = randomInt(0, currencies.length - 1);
  return currencies[index];
}

Mock.Random.extend({
  // utc格式日期时间
  utc() {
    return `${this.date()}T${this.time()}.${this.date('S')}Z`;
  },

  // 随机数字id
  nid(len = 8) {
    const reg = new RegExp(`\\d{${len}}`);
    return Mock.mock(reg);
  },

  // 随机字符串id
  sid(len = 8) {
    return randomString(len);
  },

  // 电话号码
  tel() {
    return '2203' + this.nid(4);
  },

  // 手机号码
  phone() {
    return `1${Mock.mock(/[3-9]/)}${this.nid(9)}`;
  },
  // 手机号码别名
  mobile() {
    return this.phone();
  },

  // 年龄
  age(min = 0, max = 100) {
    return this.natural(min, max);
  },

  // 金额
  money(precision = 2, min = 0, max = 10000) {
    return this.float(min, Math.max(max - 1, min), precision, precision);
  },

  // 费率
  rate(precision = 2, min = 0, max = 1) {
    return this.money(precision, min, max);
  },

  // 数字字符串
  sn(precision = 2, min = 0, max = 10000) {
    return this.money(precision, min, max) + '';
  },

  // 英文国家名称
  country() {
    return getRandomCountry().en;
  },

  // 中文国家名称
  ccountry() {
    return getRandomCountry().cn;
  },
  countryName() {
    return this.ccountry();
  },

  // 国家二/三字码
  countryCode(len = 3) {
    const fieldName = len === 2 ? 'alpha2' : 'alpha3';
    return getRandomCountry()[fieldName];
  },

  // 国家二字码
  countryCode2() {
    return this.countryCode(2);
  },

  // 国家三字码
  countryCode3() {
    return this.countryCode();
  },

  // 货币编码
  currency() {
    return getRandomCurrency().code;
  },

  // 货币名称
  currencyName() {
    return getRandomCurrency().desc;
  },

  // 货币符号
  currencySymbol() {
    return getRandomCurrency().symbol;
  },

  // 统一社会信用代码
  unifiedIdentifier() {
    return createUnifiedIdentifier();
  },
  // alias unifiedIdentifier
  uid() {
    return this.unifiedIdentifier();
  },

  // 英文公司名称
  company() {
    return this.title() + ' Co.,Ltd.';
  },

  // 中文公司名称
  ccompany() {
    return this.province() + this.ctitle() + '有限公司';
  },
  companyName() {
    return this.ccompany();
  },

  // ICP备案号
  icpNo() {
    return randomString(1, provinceShortNames) + 'ICP备' + this.nid() + '号';
  },
  // alias icpNo
  icp() {
    return this.icpNo();
  }
});

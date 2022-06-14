import Mock from 'mockjs';
import { createSocialCreditCode } from './unifiedIndentifier.util';

const countries = [
  '阿根廷',
  '澳大利亚',
  '巴西',
  '加拿大',
  '中国',
  '法国',
  '德国',
  '印度',
  '印度尼西亚',
  '意大利',
  '日本',
  '韩国',
  '墨西哥',
  '俄罗斯',
  '沙特阿拉伯',
  '南非',
  '土耳其',
  '英国',
  '美国',
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
  { code: 'AUD', desc: '澳大利亚元', symbol: '$', flagId: 'au' },
];

Mock.Random.extend({
  // 电话号码
  tel() {
    return Mock.mock(/\d{8}/);
  },

  // 手机号码
  phone() {
    return `1${Mock.mock(/[3-9]/)}${Mock.mock(/\d{9}/)}`
  },
  // 手机号码别名
  mobile() {
    return this.phone();
  },

  // 国家
  country() {
    return this.pick(countries);
  },

  // 货币
  currency() {
    return this.pick(currencies).code;
  },

  // 货币名称
  currencyName() {
    return this.pick(currencies).desc;
  },

  // 货币符号
  currencySymbol() {
    return this.pick(currencies).symbol;
  },

  // 统一社会信用代码
  unifiedIdentifier() {
    return createSocialCreditCode();
  }
});


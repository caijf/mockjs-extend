import { isInteger } from 'ut2';
import {
  Mockjs,
  getRandomCountry,
  getRandomBankCard,
  getRandomGlobalBank,
  getRandomCurrency
} from '../src';
import { CardType, CardTypeName } from 'bankcard';

describe('bank', () => {
  it('bankCardNo', () => {
    const result1 = Mockjs.Random.bankCardNo();
    console.log('bankCardNo:', result1);
    expect(result1.length >= 15 && result1.length <= 19).toBe(true);

    // mask
    const result2 = Mockjs.Random.bankCardNo(true);
    console.log('bankCardNo mask:', result2);
    expect(result2.length >= 15 && result2.length <= 19).toBe(true);
    expect(result2.indexOf('*') === 6).toBe(true);

    // format
    const result3 = Mockjs.Random.bankCardNo(false, true);
    console.log('bankCardNo format:', result3);
    expect(result3.replace(/\s/g, '').length >= 15 && result3.replace(/\s/g, '').length <= 19).toBe(
      true
    );
    expect(result3.indexOf(' ') === 4).toBe(true);

    // mask & format
    const result4 = Mockjs.Random.bankCardNo(true, true);
    console.log('bankCardNo mask & format:', result4);
    expect(result4.replace(/\s/g, '').length >= 15 && result4.replace(/\s/g, '').length <= 19).toBe(
      true
    );
    expect(result4.indexOf(' ') === 4).toBe(true);
    expect(result4.indexOf('*') === 7).toBe(true);
  });

  it('bankCardBin', () => {
    const result = Mockjs.Random.bankCardBin();
    expect(result.length >= 3 && result.length <= 10).toBe(true);
  });

  it('swiftCode', () => {
    const result = Mockjs.Random.swiftCode();
    console.log('swiftCode:', result);
    expect(result.length === 8 || result.length === 11).toBe(true);
  });

  it('bankBranchCode', () => {
    const result = Mockjs.Random.bankBranchCode();
    console.log('bankBranchCode:', result);
    expect(result.length === 3).toBe(true);
  });

  it('bankCode', () => {
    const result = Mockjs.Random.bankCode();
    console.log('bankCode:', result);
    expect(result.length >= 3).toBe(true);
  });

  it('bank', () => {
    const result = Mockjs.Random.bank();
    console.log('bank:', result);
    expect(result).toBeTruthy();
  });

  it('bankName', () => {
    const result = Mockjs.Random.bankName();
    console.log('bankName:', result);
    expect(result).toBeTruthy();
  });

  it('cardType', () => {
    const result = Mockjs.Random.cardType();
    console.log('cardType:', result);
    expect([CardType.CC, CardType.DC, CardType.SCC, CardType.PC].includes(result)).toBe(true);
  });

  it('cardTypeName', () => {
    const result = Mockjs.Random.cardTypeName();
    console.log('cardTypeName:', result);
    expect(
      [CardTypeName.CC, CardTypeName.DC, CardTypeName.PC, CardTypeName.SCC].includes(result)
    ).toBe(true);
  });

  it('globalBankName', () => {
    const result = Mockjs.Random.globalBankName();
    console.log('globalBankName:', result);
    expect(result).toBeTruthy();
  });

  it('cglobalBankName', () => {
    const result = Mockjs.Random.cglobalBankName();
    console.log('cglobalBankName:', result);
    expect(result).toBeTruthy();
  });
});

describe('other', () => {
  it('utc', () => {
    const result = Mockjs.Random.utc();
    console.log('utc:', result);
    const utcRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{1,3}Z$/;
    expect(utcRegex.test(result)).toBe(true);
  });

  it('nid', () => {
    const result1 = Mockjs.Random.nid();
    console.log('nid:', result1);
    expect(result1.length === 8).toBe(true);

    const result2 = Mockjs.Random.nid(5);
    console.log('nid2:', result2);
    expect(result2.length === 5).toBe(true);
  });

  it('sid', () => {
    const result1 = Mockjs.Random.sid();
    console.log('sid:', result1);
    expect(result1.length === 8).toBe(true);

    const result2 = Mockjs.Random.sid(5);
    console.log('sid2:', result2);
    expect(result2.length === 5).toBe(true);
  });

  it('tel', () => {
    const result = Mockjs.Random.tel();
    console.log('tel: ', result);
    expect(result.length === 8).toBe(true);
  });

  it('phone', () => {
    const result = Mockjs.Random.phone();
    console.log('phone:', result);
    expect(result.length === 11).toBe(true);
  });

  it('mobile', () => {
    const result = Mockjs.Random.mobile();
    console.log('mobile:', result);
    expect(result.length === 11).toBe(true);
  });

  it('country', () => {
    const result = Mockjs.Random.country();
    console.log('country:', result);
    expect(result).toBeTruthy();
  });

  it('ccountry', () => {
    const result = Mockjs.Random.ccountry();
    console.log('ccountry:', result);
    expect(result).toBeTruthy();
  });

  it('ccompany', () => {
    const result = Mockjs.Random.ccompany();
    console.log('ccompany:', result);
    expect(result).toBeTruthy();
  });

  it('countryCode', () => {
    const result = Mockjs.Random.countryCode();
    console.log('countryCode:', result);
    expect(result).toBeTruthy();
  });

  it('countryCode2', () => {
    const result = Mockjs.Random.countryCode2();
    console.log('countryCode2:', result);
    expect(result).toBeTruthy();
  });

  it('countryCode3', () => {
    const result = Mockjs.Random.countryCode3();
    console.log('countryCode3:', result);
    expect(result).toBeTruthy();
  });

  it('currency', () => {
    const result = Mockjs.Random.currency();
    console.log('currency:', result);
    expect(result).toBeTruthy();
  });

  it('currencyName', () => {
    const result = Mockjs.Random.currencyName();
    console.log('currencyName:', result);
    expect(result).toBeTruthy();
  });

  it('currencySymbol', () => {
    const result = Mockjs.Random.currencySymbol();
    console.log('currencySymbol:', result);
    expect(result).toBeTruthy();
  });

  it('uid', () => {
    const result = Mockjs.Random.uid();
    console.log('uid:', result);
    expect(result).toBeTruthy();
  });

  it('company', () => {
    const result = Mockjs.Random.company();
    console.log('company:', result);
    expect(result).toBeTruthy();
  });

  it('companyName', () => {
    const result = Mockjs.Random.companyName();
    console.log('companyName:', result);
    expect(result).toBeTruthy();
  });

  it('age', () => {
    const result = Mockjs.Random.age();
    console.log('age:', result);
    expect(result).toBeTruthy();
  });

  it('money', () => {
    const result = Mockjs.Random.money();
    console.log('money:', result);
    expect(result).toBeTruthy();

    const result2 = Mockjs.Random.money(0);
    console.log('money2:', result2);
    expect(isInteger(result2)).toBe(true);
  });

  it('rate', () => {
    const result = Mockjs.Random.rate();
    console.log('rate:', result);
    expect(result).toBeTruthy();
  });

  it('sn', () => {
    const result = Mockjs.Random.sn();
    console.log('sn:', result);
    expect(result).toBeTruthy();
    expect(typeof result === 'string').toBe(true);
  });

  it('icp', () => {
    const result = Mockjs.Random.icp();
    console.log('icp:', result);
    expect(result).toBeTruthy();
  });

  it('provinceCode', () => {
    const result = Mockjs.Random.provinceCode();
    console.log('provinceCode:', result);
    expect(result).toBeTruthy();
  });

  it('cityCode', () => {
    const result = Mockjs.Random.cityCode();
    console.log('cityCode:', result);
    expect(result).toBeTruthy();
  });

  it('areaCode', () => {
    const result = Mockjs.Random.areaCode();
    console.log('areaCode:', result);
    expect(result).toBeTruthy();
  });
});

describe('random data', () => {
  it('getRandomCurrency', () => {
    const result = getRandomCurrency();
    console.log('getRandomCurrency(): ', result);
    expect(result.code).toBeDefined();
    expect(result.desc).toBeDefined();
    expect(result.flagId).toBeDefined();
    expect(result.symbol).toBeDefined();
  });
  it('getRandomCountry', () => {
    const result = getRandomCountry();
    console.log('getRandomCountry(): ', result);
    expect(result.alpha2).toBeDefined();
    expect(result.alpha3).toBeDefined();
    expect(result.cn).toBeDefined();
    expect(result.en).toBeDefined();
  });
  it('getRandomGlobalBank', () => {
    const result = getRandomGlobalBank();
    console.log('getRandomGlobalBank(): ', result);
    expect(result.cn).toBeDefined();
    expect(result.en).toBeDefined();
  });
  it('getRandomBankCard', () => {
    const result = getRandomBankCard();
    console.log('getRandomBankCard(): ', result);
    expect(result.bankCode).toBeDefined();
    expect(result.bankName).toBeDefined();
    expect(result.cardBin).toBeDefined();
    expect(result.cardType).toBeDefined();
    expect(result.cardTypeName).toBeDefined();
    expect(result.len).toBeDefined();
  });
});

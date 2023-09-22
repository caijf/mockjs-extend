import { Mockjs } from '../src';

describe('mockjs-extend', () => {
  it('bank', () => {
    const bankCardNo = Mockjs.Random.bankCardNo();
    const bankCardNoMask = Mockjs.Random.bankCardNo(true);
    const bankCardNoFormat = Mockjs.Random.bankCardNo(false, true);
    const bankCardBin = Mockjs.Random.bankCardBin();
    const swiftCode = Mockjs.Random.swiftCode();
    const bankBranchCode = Mockjs.Random.bankBranchCode();
    const bankCode = Mockjs.Random.bankCode();
    const bank = Mockjs.Random.bank();
    const bankName = Mockjs.Random.bankName();
    const cardType = Mockjs.Random.cardType();
    const cardTypeName = Mockjs.Random.cardTypeName();
    const globalBankName = Mockjs.Random.globalBankName();
    const cglobalBankName = Mockjs.Random.cglobalBankName();

    // console.log(Mockjs.mock({
    //   data: {
    //     cardNo: '@bankCardNo(false, true)'
    //   }
    // }));

    console.log('bankCardNo:', bankCardNo);
    console.log('bankCardNoMask:', bankCardNoMask);
    console.log('bankCardBin:', bankCardBin);
    console.log('swiftCode:', swiftCode);
    console.log('bankBranchCode:', bankBranchCode);
    console.log('bankCode:', bankCode);
    console.log('bank:', bank);
    console.log('bankName:', bankName);
    console.log('cardType:', cardType);
    console.log('cardTypeName:', cardTypeName);
    console.log('globalBankName:', globalBankName);
    console.log('cglobalBankName:', cglobalBankName);

    expect(bankCardNo).toBeTruthy();
    expect(bankCardNoMask).toBeTruthy();
    expect(bankCardBin).toBeTruthy();
    expect(swiftCode).toBeTruthy();
    expect(bankBranchCode).toBeTruthy();
    expect(bankCode).toBeTruthy();
    expect(bank).toBeTruthy();
    expect(bankName).toBeTruthy();
    expect(cardType).toBeTruthy();
    expect(cardTypeName).toBeTruthy();
    expect(globalBankName).toBeTruthy();
    expect(cglobalBankName).toBeTruthy();
  });

  it('other', () => {
    const tel = Mockjs.Random.tel();
    const phone = Mockjs.Random.phone();
    const mobile = Mockjs.Random.mobile();
    const country = Mockjs.Random.country();
    const countryName = Mockjs.Random.countryName();
    const countryCode = Mockjs.Random.countryCode();
    const currency = Mockjs.Random.currency();
    const currencyName = Mockjs.Random.currencyName();
    const currencySymbol = Mockjs.Random.currencySymbol();
    const unifiedIdentifier = Mockjs.Random.unifiedIdentifier();
    const company = Mockjs.Random.company();
    const companyName = Mockjs.Random.companyName();
    const age = Mockjs.Random.age();
    const money = Mockjs.Random.money();

    console.log('tel:', tel);
    console.log('phone:', phone);
    console.log('mobile:', mobile);
    console.log('country:', country);
    console.log('countryName:', countryName);
    console.log('countryCode:', countryCode);
    console.log('currency:', currency);
    console.log('currencyName:', currencyName);
    console.log('currencySymbol:', currencySymbol);
    console.log('unifiedIdentifier:', unifiedIdentifier);
    console.log('company: ', company);
    console.log('companyName: ', companyName);
    console.log('age: ', age);
    console.log('money: ', money);

    expect(tel).toBeTruthy();
    expect(phone).toBeTruthy();
    expect(mobile).toBeTruthy();
    expect(country).toBeTruthy();
    expect(countryName).toBeTruthy();
    expect(countryCode).toBeTruthy();
    expect(currency).toBeTruthy();
    expect(currencyName).toBeTruthy();
    expect(currencySymbol).toBeTruthy();
    expect(unifiedIdentifier).toBeTruthy();
  });
});

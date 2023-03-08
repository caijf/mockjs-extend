import Mock from '../src';

describe('mockjs-extend', () => {
  it('bank', () => {
    const bankCardNo = Mock.Random.bankCardNo();
    const bankCardNoMask = Mock.Random.bankCardNo(true);
    const bankCardNoFormat = Mock.Random.bankCardNo(false, true);
    const bankCardBin = Mock.Random.bankCardBin();
    const swiftCode = Mock.Random.swiftCode();
    const bankBranchCode = Mock.Random.bankBranchCode();
    const bankCode = Mock.Random.bankCode();
    const bank = Mock.Random.bank();
    const bankName = Mock.Random.bankName();
    const cardType = Mock.Random.cardType();
    const cardTypeName = Mock.Random.cardTypeName();
    const globalBankName = Mock.Random.globalBankName();
    const cglobalBankName = Mock.Random.cglobalBankName();

    // console.log(Mock.mock({
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
    const tel = Mock.Random.tel();
    const phone = Mock.Random.phone();
    const mobile = Mock.Random.mobile();
    const country = Mock.Random.country();
    const countryName = Mock.Random.countryName();
    const countryCode = Mock.Random.countryCode();
    const currency = Mock.Random.currency();
    const currencyName = Mock.Random.currencyName();
    const currencySymbol = Mock.Random.currencySymbol();
    const unifiedIdentifier = Mock.Random.unifiedIdentifier();

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

// 银行
import Mock from 'mockjs';
import { randomInt } from 'ut2';
import { formatBankCard, isBankCard, randomString, replaceChar } from 'util-helpers';
import { cards } from 'bankcard';
import globalBank from './bank_global_dict';

/**
 * 获取随机国际银行
 */
export function getRandomGlobalBank() {
  return globalBank[randomInt(0, globalBank.length - 1)];
}

/**
 * 获取随机银行
 */
export function getRandomBankCard() {
  return cards[randomInt(0, cards.length - 1)];
}

function createBankCardNo() {
  const card = getRandomBankCard();
  const cardNo = card.cardBin + randomString(card.len - card.cardBin.length - 1, '0123456789');
  return cardNo + isBankCard.sumCheckCode(cardNo);
}

Mock.Random.extend({
  // 银行卡号
  bankCardNo(mask = false, format = false) {
    let cardNo = createBankCardNo();
    if (mask) {
      cardNo = replaceChar(cardNo, { start: 6, end: -4 });
    }
    if (format) {
      cardNo = formatBankCard(cardNo);
    }
    return cardNo;
  },

  // 银行卡bin
  bankCardBin() {
    return getRandomBankCard().cardBin;
  },

  // SWIFT CODE
  // ref: https://zh.wikipedia.org/wiki/ISO_9362
  swiftCode() {
    const branchCode = this.boolean() ? this.bankBranchCode() : '';
    return this.upper(this.word(6)) + this._areaCode() + branchCode;
  },

  // 地区码
  // 2英文字或数字
  _areaCode(): string {
    return this.boolean() ? this.natural(10, 99) + '' : this.upper(this.word(2));
  },

  // 分行代码
  // 3英文字或数字
  bankBranchCode(): string {
    return this.boolean() ? this.natural(100, 999) + '' : this.upper(this.word(3));
  },

  // 银行编码
  bankCode() {
    return getRandomBankCard().bankCode;
  },

  // 银行名称
  bank(): string {
    return this.bankName();
  },

  // 银行名称
  bankName() {
    return getRandomBankCard().bankName;
  },

  // 银行卡类型
  cardType() {
    return getRandomBankCard().cardType;
  },

  // 银行卡类型名称
  cardTypeName() {
    return getRandomBankCard().cardTypeName;
  },

  // 国际银行名称 - 英文
  globalBankName(): string {
    return getRandomGlobalBank().en;
  },

  // 国际银行名称 - 中文
  cglobalBankName(): string {
    return getRandomGlobalBank().cn;
  }
});

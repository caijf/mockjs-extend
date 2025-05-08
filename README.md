# mockjs-extend

基于 [mockjs](https://github.com/nuysoft/Mock/wiki) 扩展生成随机数据

[![npm][npm]][npm-url] ![GitHub](https://img.shields.io/github/license/caijf/mockjs-extend.svg)

## 使用

### 安装

```shell
npm install mockjs-extend --save-dev
```

```shell
yarn add mockjs-extend -D
```

```shell
pnpm add mockjs-extend -D
```

### 示例：使用扩展的模拟数据

```javascript
// Mockjs 等同于 mockjs 模块，同时扩展了大量的模拟数据
import { Mockjs } from 'mockjs-extend';

export default {
  'POST xxx/xxx': Mockjs.mock({
    errCode: '0000',
    errMsg: 'mock success',
    'data|2-10': [
      {
        bankCode: '@bankCode', // 银行编码
        bankName: '@bankName', // 银行名称
        cardNo1: '@bankCardNo', // 银行卡号
        cardNo2: '@bankCardNo(true)', // 银行卡号脱敏
        cardNo3: '@bankCardNo(false, true)', // 银行卡号格式化
        bankCardBin: '@bankCardBin', // 银行卡 bin
        swiftCode: '@swiftCode', // SWIFT CODE
        bankBranchCode: '@bankBranchCode', // 分行代码
        cardType: '@cardType', // 银行卡类型
        cardTypeName: '@cardTypeName', // 银行卡类型名称
        globalBankName: '@globalBankName', // 英文国际银行名称
        cglobalBankName: '@cglobalBankName', // 中文国际银行名称

        utc: '@utc', // utc格式日期时间
        nid: '@nid', // 指定长度的随机数字字符串
        sid: '@sid', // 指定长度的随机字符字符串
        mobile: '@mobile', // 手机号码
        tel: '@tel', // 电话号码
        age: '@age', // 年龄
        money: '@money', // 金额
        rate: '@rate', // 费率
        sn: '@sn', // 数字字符串
        country: '@country', // 英文国家名称
        ccountry: '@ccountry', // 中文国家名称
        countryCode1: '@countryCode', // 国家三字码
        countryCode2: '@countryCode(2)', // 国家二字码
        currency: '@currency', // 货币编码
        currencyName: '@currencyName', // 货币名称
        currencySymbol: '@currencySymbol', // 货币符号
        uid: '@uid', // 统一社会信用代码
        company: '@company', // 英文公司名称
        ccompany: '@ccompany', // 中文公司名称
        icp: '@icp' // ICP备案号
      }
    ]
  })
};
```

### 示例：使用工具类

- **mock/util.ts**

```typescript
import { MockUtilClass } from 'mockjs-extend';

const mockUtil = new MockUtilClass({
  // 模拟请求延迟时间
  delay: 100,
  // 响应数据发送方法
  sendMethod: 'send',
  // 响应基本数据结构
  responseBasic: {
    code: '0000',
    message: 'mock success'
  },
  // 响应分页数据结构
  responsePage(pageData) {
    return {
      pageNum: 1,
      pageSize: 10,
      'total|15-100': 20,
      'pages|2-10': 2,
      'data|10': [pageData]
    };
  }
});

export default mockUtil;
```

- **mock/login.mock.ts**

```typescript
import mockUtil from './utils';

export default {
  'POST /api/login': mockUtil.mockData({
    data: {
      username: '@cname',
      mobile: '@mobile',
      token: '@guid'
    }
  })
};
```

- **mock/user.mock.ts**

```typescript
import mockUtil from './utils';

export default {
  'POST /api/user/list': mockUtil.mockPageData({
    id: '@sid',
    username: '@cname',
    mobile: '@mobile',
    email: '@email'
  })
};
```

### 示例：自定义随机生成数据

由于生成数据没有关联性，例如 `@bankCode` `@bankName` 等。如果你需要生成的数据有关联性，可以使用下列方法获取随机数据对象。

```typescript
import {
  getRandomCurrency,
  getRandomCountry,
  getRandomGlobalBank,
  getRandomBankCard
} from 'mockjs-extend';

console.log(getRandomCurrency());
// { code: 'SEK', desc: '瑞典克朗', symbol: 'Kr', flagId: 'se' }

console.log(getRandomCountry());
// { alpha2: 'GB', alpha3: 'GBR', cn: '英国', en: 'United Kingdom' }

console.log(getRandomGlobalBank());
// { cn: '住友信托银行', en: 'Sumitomo Trust & Banking' }

console.log(getRandomBankCard());
// { bankName: '吉林银行', bankCode: 'JLBANK', cardBin: '622178', cardType: 'CC', cardTypeName: '信用卡', len: 16 }
```

## 文档

使用 Mockjs.Random.exted 扩展。

### 银行

#### Mockjs.Random.bankCode()

银行编码

```text
Mockjs.Random.bankCode(); // => ICBC
Mockjs.Random.bankCode(); // => URB
```

#### Mockjs.Random.bankName()

银行名称

```text
Mockjs.Random.bankName(); // => 哈尔滨银行
Mockjs.Random.bankName(); // => 乌海银行
```

#### Mockjs.Random.bankCardNo(mask=false, format=false)

银行卡号

- **mask**

脱敏。可选。

- **format**

格式化。可选。

```text
Mockjs.Random.bankCardNo(); // 5156729973651523
Mockjs.Random.bankCardNo(true); // 515672******1523
Mockjs.Random.bankCardNo(true, true); // 5156 72** **** 1523
```

#### Mockjs.Random.bankCardBin()

银行卡 bin

```text
Mockjs.Random.bankCardBin(); // => 526410
```

#### Mockjs.Random.swiftCode()

SWIFT CODE

```text
Mockjs.Random.swiftCode(); // => JYSQJSKA
```

#### Mockjs.Random.bankBranchCode()

分行代码

```text
Mockjs.Random.bankBranchCode(); // => IYX
```

#### Mockjs.Random.cardType()

银行卡类型

```text
Mockjs.Random.cardType(); // => CC
```

#### Mockjs.Random.cardTypeName()

银行卡类型名称

```text
Mockjs.Random.cardTypeName(); // => 储蓄卡
```

#### Mockjs.Random.globalBankName()

英文国际银行名称

```text
Mockjs.Random.globalBankName(); // => Dresdner Bank
```

#### Mockjs.Random.cglobalBankName()

中文国际银行名称

```text
Mockjs.Random.cglobalBankName(); // => 大通曼哈顿银行
```

### 其他

#### Mockjs.Random.utc()

utc格式日期时间

```text
Mockjs.Random.utc(); // => 1990-03-27T22:46:57.409Z
Mockjs.Random.utc(); // => 2002-09-22T09:49:36.91Z
```

#### Mockjs.Random.nid(len=8)

指定长度的随机数字字符串

```text
Mockjs.Random.nid(); // => 29573221
Mockjs.Random.nid(5); // => 07174
```

#### Mockjs.Random.sid(len=8)

指定长度的随机字符字符串

```text
Mockjs.Random.sid(); // => s8ZHTdHr
Mockjs.Random.sid(5); // => kYOiT
```

#### Mockjs.Random.tel()

电话号码

```text
Mockjs.Random.tel(); // => 37316547
```

#### Mockjs.Random.phone()

手机号码

```text
Mockjs.Random.phone(); // => 17837351484
```

#### Mockjs.Random.mobile()

手机号码，同 phone

```text
Mockjs.Random.mobile(); // => 14561418878
```

#### Mockjs.Random.age(min=0, max=100)

年龄

```text
Mockjs.Random.age(); // => 18
```

#### Mockjs.Random.money(precision=2, min=0, max=10000)

金额，默认 2 位小数点

```text
Mockjs.Random.money(); // => 128.41

// 不要小数点
Mockjs.Random.money(0); // => 326

// 自定义最大最小值
Mockjs.Random.money(2, 100, 1000); // => 843
```

#### Mockjs.Random.rate(precision=2, min=0, max=1)

费率，默认 2 位小数点

```text
Mockjs.Random.rate(); // => 0.41

// 4位小数点
Mockjs.Random.rate(4); // => 0.1326

// 自定义最大最小值
Mockjs.Random.rate(2, 0, 5); // => 1.83
```

#### Mockjs.Random.sn(precision=2, min=0, max=1)

数字字符串，默认 2 位小数点

```text
Mockjs.Random.sn(); // => "0.41"

// 4位小数点
Mockjs.Random.sn(4); // => "0.1326"

// 自定义最大最小值
Mockjs.Random.sn(2, 0, 5); // => "1.83"
```

#### Mockjs.Random.country()

英文国家名称

```text
Mockjs.Random.country(); // => Turkey
```

#### Mockjs.Random.ccountry()

中文国家名称

```text
Mockjs.Random.ccountry(); // => 土耳其
```

#### Mockjs.Random.countryCode(len=3)

国家二/三字码

- **len**

默认为 3 ，可选。2-二字码 3-三字码

```text
Mockjs.Random.countryCode(); // => TUR
Mockjs.Random.countryCode(2); // => TR
```

#### Mockjs.Random.currency()

货币编码

```text
Mockjs.Random.currency(); // => NZD
```

#### Mockjs.Random.currencyName()

货币名称

```text
Mockjs.Random.currencyName(); // => 柬埔寨瑞尔
```

#### Mockjs.Random.currencySymbol()

货币符号

```text
Mockjs.Random.currencySymbol(); // => ៛
```

#### Mockjs.Random.uid()

> ⚠️非真实信息，仅供测试使用，请勿用于非法用途。

统一社会信用代码

```text
Mockjs.Random.uid(); // => 35210703CDMKJ424LA
```

#### Mockjs.Random.company()

> ⚠️非真实信息，仅供测试使用，请勿用于非法用途。

英文公司名称

```text
Mockjs.Random.company(); // => Bxdmj Peurpx Aumozuufp Jpgmyky Gavxpt Wfds Co.,Ltd.
```

#### Mockjs.Random.ccompany()

> ⚠️非真实信息，仅供测试使用，请勿用于非法用途。

中文公司名称

```text
Mockjs.Random.ccompany(); // => 云南省世把书质派保有限公司
```

#### Mockjs.Random.icp()

> ⚠️非真实信息，仅供测试使用，请勿用于非法用途。

ICP备案号

```text
Mockjs.Random.icp(); // => 陕ICP备69861741号
```

[npm]: https://img.shields.io/npm/v/mockjs-extend.svg
[npm-url]: https://npmjs.com/package/mockjs-extend

## 常见问题

### 数据同时存在 `id` 和 `@id` 时，`@id` 不生效

```typescript
// before
Mockjs.mock({
  'list|1-10': [
    {
      'id|+1': 1,
      name: '@cname',
      idNumber: '@id' // 值跟 `id` 一样
    }
  ]
});

// after
// 使用 `Mockjs.Random.id()` 来生成身份证号
Mockjs.mock({
  'list|1-10': [
    {
      'id|+1': 1,
      name: '@cname',
      idNumber: Mockjs.Random.id()
    }
  ]
});
```

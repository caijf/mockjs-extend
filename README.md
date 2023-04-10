# mockjs-extend

基于 [mockjs](https://github.com/nuysoft/Mock/wiki) 扩展生成随机数据

## 使用

### 安装

```bash
npm install mockjs-extend --save-dev
```

或

```bash
yarn add mockjs-extend --dev
```

### 示例

```javascript
// Mockjs 等同于 mockjs 模块，同时扩展了大量的模拟数据
import { Mockjs } from 'mockjs-extend';

export default {
  'POST xxx/xxx': Mockjs.mock({
    errCode: '0000',
    errMsg: 'mock success',
    'data|2-10': [
      {
        bankName: '@bankName', // 银行名称
        bankCode: '@bankCode', // 银行编码
        cardNo: '@bankCardNo', // 银行卡号
        cardNoMask: '@bankCardNo(true)', // 银行卡号脱敏
        phone: '@phone', // 手机号码
        country: '@country', // 国家
        currency: '@currency', // 货币
        currencyName: '@currencyName', // 货币名称
        currencySymbol: '@currencySymbol', // 货币符号
      },
    ],
  }),
};
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

**mask**

脱敏。可选。

**format**

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

#### Mockjs.Random.country()

国家英文名称

```text
Mockjs.Random.country(); // => Turkey
```

#### Mockjs.Random.countryName()

国家中文名称

```text
Mockjs.Random.countryName(); // => 土耳其
```

#### Mockjs.Random.countryCode(len=3)

国家二/三字码

**len**

默认为 3 ，可选。2-二字码 3-三字码

```text
Mockjs.Random.countryCode(); // => TUR
Mockjs.Random.countryCode(2); // => TR
```

#### Mockjs.Random.currency()

货币

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

#### Mockjs.Random.unifiedIdentifier()

> 非真实信息，仅供测试使用，请勿用于非法用途。

统一社会信用代码

```text
Mockjs.Random.unifiedIdentifier(); // => 35210703CDMKJ424LA
```

# mockjs-extend

基于 mockjs 扩展生成随机数据

## 使用

### 安装

```bash
npm install mockjs-extend
```

或

```bash
yarn add mockjs-extend
```

### 示例

```javascript
// mock 文件中引入
import Mock from 'mockjs';
import 'mockjs-extend';

export default {
  'POST xxx/xxx': Mock.mock({
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

使用 Mock.Random.exted 扩展。

### 银行

#### Mock.Random.bankCode()

银行编码

```text
Mock.Random.bankCode(); // => ICBC
Mock.Random.bankCode(); // => URB
```

#### Mock.Random.bankName()

银行名称

```text
Mock.Random.bankName(); // => 哈尔滨银行
Mock.Random.bankName(); // => 乌海银行
```

#### Mock.Random.bankCardNo(mask=false, format=false)

银行卡号

**mask**

脱敏。可选。

**format**

格式化。可选。

```text
Mock.Random.bankCardNo(); // 5156729973651523
Mock.Random.bankCardNo(true); // 515672******1523
Mock.Random.bankCardNo(true, true); // 5156 72** **** 1523
```

#### Mock.Random.bankCardBin()

银行卡 bin

```text
Mock.Random.bankCardBin(); // => 526410
```

#### Mock.Random.swiftCode()

SWIFT CODE

```text
Mock.Random.swiftCode(); // => JYSQJSKA
```

#### Mock.Random.bankBranchCode()

分行代码

```text
Mock.Random.bankBranchCode(); // => IYX
```

#### Mock.Random.cardType()

银行卡类型

```text
Mock.Random.cardType(); // => CC
```

#### Mock.Random.cardTypeName()

银行卡类型名称

```text
Mock.Random.cardTypeName(); // => 储蓄卡
```

#### Mock.Random.globalBankName()

英文国际银行名称

```text
Mock.Random.globalBankName(); // => 大通曼哈顿银行
```

#### Mock.Random.cglobalBankName()

中文国际银行名称

```text
Mock.Random.cglobalBankName(); // => 大通曼哈顿银行
```

### 其他

#### Mock.Random.tel()

电话号码

```text
Mock.Random.tel(); // => 37316547
```

#### Mock.Random.phone()

手机号码

```text
Mock.Random.phone(); // => 17837351484
```

#### Mock.Random.mobile()

手机号码，同 phone

```text
Mock.Random.mobile(); // => 14561418878
```

#### Mock.Random.country()

国家

```text
Mock.Random.country(); // => 法国
```

#### Mock.Random.currency()

货币

```text
Mock.Random.currency(); // => NZD
```

#### Mock.Random.currencyName()

货币名称

```text
Mock.Random.currencyName(); // => 柬埔寨瑞尔
```

#### Mock.Random.currencySymbol()

货币符号

```text
Mock.Random.currencySymbol(); // => ៛
```

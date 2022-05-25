import Mock from 'mockjs';

// 随机字符串简单版
// ref: https://github.com/doly-dev/util-helpers/blob/master/src/randomString.js
const randomString = (str: string, len = 1, preString = '') => {
  while (len-- > 0) {
    const rs = str[Math.floor(Math.random() * str.length)];
    return preString + rs;
  }
  return preString;
}

// TODO: 规划一些常用的生成数据
Mock.Random.extend({
  country() {
    const data = [
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
    const id = Number((Math.random() * data.length).toFixed());
    return data[id];
  },

  phone() {
    return `1${randomString('3456789')}${Mock.mock(/\d{9}/)}`;
  }
});


// TODO: type mix
// declare namespace mockjs {
//   // namespace Randowm {
//   //   export const phone: () => string;
//   // }

//   // Random.
// }

// TODO: tests
console.log(Mock.Random.phone());
console.log(Mock.Random.phone());
console.log(Mock.Random.phone());

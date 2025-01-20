import { isUnifiedIdentifier, randomString } from 'util-helpers';
import { data, isCityCode, isAreaCode } from 'lcn';
import { randomInt } from 'ut2';

const cities: typeof data = [];
const areas: typeof data = [];

data.forEach((item) => {
  if (isCityCode(item.code)) {
    cities.push(item);
  } else if (isAreaCode(item.code)) {
    areas.push(item);
  }
});

export const getRandomCityAndAreaCode = () => {
  const cityAndAreas = [...cities, ...areas];
  return cityAndAreas[randomInt(0, cityAndAreas.length - 1)].code;
};

export const basicCode = '0123456789ABCDEFGHJKLMNPQRTUWXY';

// 登记管理部门-机构类别
export const organization = [
  {
    label: '机构编制',
    value: '1',
    children: [
      {
        label: '机关',
        value: '1'
      },
      {
        label: '事业单位',
        value: '2'
      },
      {
        label: '编办直接管理机构编制的群众团体',
        value: '3'
      },
      {
        label: '其他',
        value: '9'
      }
    ]
  },
  {
    label: '外交',
    value: '2',
    children: [
      {
        label: '外国常驻新闻机构',
        value: '1'
      },
      {
        label: '其他',
        value: '9'
      }
    ]
  },
  {
    label: '司法行政',
    value: '3',
    children: [
      {
        label: '律师执业机构',
        value: '1'
      },
      {
        label: '公证处',
        value: '2'
      },
      {
        label: '基层法律服务所',
        value: '3'
      },
      {
        label: '司法鉴定机构',
        value: '4'
      },
      {
        label: '仲裁委员会',
        value: '5'
      },
      {
        label: '其他',
        value: '9'
      }
    ]
  },
  {
    label: '文化',
    value: '4',
    children: [
      {
        label: '外国在华文化中心',
        value: '1'
      },
      {
        label: '其他',
        value: '9'
      }
    ]
  },
  {
    label: '民政',
    value: '5',
    children: [
      {
        label: '社会团体',
        value: '1'
      },
      {
        label: '民办非企业单位',
        value: '2'
      },
      {
        label: '基金会',
        value: '3'
      },
      {
        label: '其他',
        value: '9'
      }
    ]
  },
  {
    label: '旅游',
    value: '6',
    children: [
      {
        label: '外国旅游部门常驻代表机构',
        value: '1'
      },
      {
        label: '港澳台地区旅游部门常驻内地（大陆）代表机构',
        value: '2'
      },
      {
        label: '其他',
        value: '9'
      }
    ]
  },
  {
    label: '宗教',
    value: '7',
    children: [
      {
        label: '宗教活动场所',
        value: '1'
      },
      {
        label: '宗教院校',
        value: '2'
      },
      {
        label: '其他',
        value: '9'
      }
    ]
  },
  {
    label: '工会',
    value: '8',
    children: [
      {
        label: '基层工会',
        value: '1'
      },
      {
        label: '其他',
        value: '9'
      }
    ]
  },
  {
    label: '工商',
    value: '9',
    children: [
      {
        label: '企业',
        value: '1'
      },
      {
        label: '个体工商户',
        value: '2'
      },
      {
        label: '农民专业合作社',
        value: '3'
      }
    ]
  },
  {
    label: '中央军委改革和编制办公室',
    value: 'A',
    children: [
      {
        label: '军队事业单位',
        value: '1'
      },
      {
        label: '其他',
        value: '9'
      }
    ]
  },
  {
    label: '农业',
    value: 'N',
    children: [
      {
        label: '组级集体经济组织',
        value: '1'
      },
      {
        label: '村级集体经济组织',
        value: '2'
      },
      {
        label: '乡镇级集体经济组织',
        value: '3'
      },
      {
        label: '其他',
        value: '9'
      }
    ]
  },
  {
    label: '其他',
    value: 'Y',
    children: [
      {
        label: '其他',
        value: '1'
      }
    ]
  }
];

export function getBodyIdentifier() {
  return randomString(9, basicCode);
}

export function getRandomOrg() {
  const registryCode = randomString(1, organization.map((item) => item.value).join(''));
  const registryClasses = organization.find((item) => item.value === registryCode)!.children;
  const orgCode = randomString(1, registryClasses.map((item) => item.value).join(''));
  return [registryCode, orgCode];
}

export function isBodyIdentifier(value: string) {
  return /^[\dA-HJ-NPQRTUWXY]{9}$/.test(value);
}

export function normalizeBodyIdentifier(value: string) {
  return value
    ? value
        .toUpperCase()
        .replace(/[^\dA-HJ-NPQRTUWXY]/g, '')
        .substring(0, 9)
    : value;
}

export function createUnifiedIdentifier(
  orgCode?: string,
  areaCode?: string,
  bodyIdentifier?: string
) {
  const realOrgCode = orgCode || getRandomOrg().join('');
  const realAreaCode = areaCode || getRandomCityAndAreaCode();
  const realBodyIdentifier = bodyIdentifier || getBodyIdentifier();

  const precode = realOrgCode + realAreaCode + realBodyIdentifier;
  const checkCode = isUnifiedIdentifier.sumCheckCode(precode);
  return precode + checkCode;
}

/**
 * @deprecated 即将废弃，请使用 `createUnifiedIdentifier` 替代。
 */
export const createSocialCreditCode = createUnifiedIdentifier;

export const unifiedIdentifierUtil = {
  getRandomCityAndAreaCode,
  basicCode,
  organization,
  getBodyIdentifier,
  getRandomOrg,
  isBodyIdentifier,
  normalizeBodyIdentifier,
  createSocialCreditCode,
  createUnifiedIdentifier
};

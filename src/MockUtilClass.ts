import type { Request, Response } from 'express';
import { isFunction, sleep } from 'ut2';
import { Mockjs } from './index.basic';

// 模拟接口延迟时间
const DELAY_TIME = 100;

// 响应数据基础结构
const ResponseBasicConstructor = {
  code: '0000', // 错误码
  message: 'mock success' // 错误信息
} as Record<string, any>;

// 响应数据分页结构
const ResponsePageConstructor = (pageData: Record<string, any> = {}) =>
  ({
    pageNum: 1, //	当前页码
    pageSize: 10, //	每页条数
    'total|15-100': 20, //总条数
    'pages|2-10': 2, //	总页数
    'data|10': [pageData] //	响应数据
  }) as Record<string, any>;

// 配置项
type Options = {
  /**
   * 接口延迟时间，单位 `ms`。
   *
   * @default 100
   */
  delay?: number;

  /**
   * 响应数据发送方式。常见的有 `res.send` `res.end` 等。
   *
   * @default 'send'
   */
  sendMethod?: string;

  /**
   * 格式化响应数据。
   *
   * 如果 `sendMethod='end'`，默认值为 `JSON.stringify`。
   *
   * @param data 响应数据
   * @returns 处理后的响应数据
   */
  format?: (data: Record<string, any>) => any;

  /**
   * 自定义基础数据结构。
   *
   * @default {
   *   code: '0000', // 错误码
   *   message: 'mock success' // 错误信息
   * }
   */
  responseBasic?: Record<string, any>;

  /**
   * 自定义分页数据结构。
   *
   * @param pageData 单页数据
   * @returns
   * @default (pageData = {}) => ({
   *   pageNum: 1,            // 当前页码
   *   pageSize: 10,          // 每页条数
   *   'total|15-100': 20,    // 总条数
   *   'pages|2-10': 2,       // 总页数
   *   'data|10': [pageData]  // 响应数据
   * });
   */
  responsePage?: (pageData?: Record<string, any>) => Record<string, any>;
};

// 参数类型
type MockParam<
  TRequest extends Record<string, any> = Request,
  TResponse extends Record<string, any> = Response
> = Record<string, any> | ((req: TRequest, res: TResponse) => Promise<Record<string, any>>);

/**
 * mock 工具类
 *
 * @param {Object} [options] 配置项
 * @example
 * const mockIns = new MockUtilClass({
 *   // 默认配置
 *   delay: 100,
 *   sendMethod: 'send',
 *   responseBasic: { code: '0000', message: 'mock success' },
 *   responsePage(pageData){
 *     return {
 *       pageNum: 1,
 *       pageSize: 10,
 *       'total|15-100': 20,
 *       'pages|2-10': 2,
 *       'data|10': [pageData]
 *     }
 *   }
 * });
 *
 * await mockIns.mockData({ data: { icp: '@icp' } })(req, res);
 * // 内部调用 res.send({ code: '0000', message: 'mock success', data: { icp: '陕ICP备69861741号' } })
 *
 * await mockIns.mockPageData({ icp: '@icp' })(req, res);
 * // 内部调用 res.send({ code: '0000', message: 'mock success', pageNum: 1, pageSize: 10, total: 32, pages: 6, data: [ { icp: '陕ICP备69861741号' }, { icp: '闽ICP备82861788号' } ] })
 *
 */
class MockUtilClass<
  TRequest extends Record<string, any> = Request,
  TResponse extends Record<string, any> = Response
> {
  options: Options;

  constructor(options?: Options) {
    const defaultFormat = options?.sendMethod === 'end' ? JSON.stringify : undefined;

    this.options = {
      delay: DELAY_TIME,
      sendMethod: 'send',
      format: defaultFormat,
      responseBasic: ResponseBasicConstructor,
      responsePage: ResponsePageConstructor,
      ...options
    };
  }

  /**
   * 生成一个异步函数。内部调用发送响应数据方法（数据结构是创建实例时传入的 `responseBasic`）。可以直接传给 node http 服务。
   *
   * 响应数据支持 `Mockjs` 的语法规范。
   *
   * @param data 响应数据
   * @returns
   * @example
   * const mockIns = new MockUtilClass();
   * await mockIns.mockData({ data: { icp: '@icp' } })(req, res);
   * // 内部调用 res.send({ code: '0000', message: 'mock success', data: { icp: '陕ICP备69861741号' } });
   */
  mockData(data: MockParam<TRequest, TResponse> = {}) {
    return async (req: TRequest, res: TResponse) => {
      await sleep(this.options.delay);

      let realData = data;
      if (typeof data === 'function') {
        realData = await data(req, res);
        if (!realData) {
          return;
        }
      }

      const result = Mockjs.mock({
        ...this.options.responseBasic,
        ...realData
      });
      const fmtResult = isFunction(this.options.format) ? this.options.format(result) : result;
      res[this.options.sendMethod!](fmtResult);
    };
  }

  /**
   * 生成一个异步函数。内部调用发送分页数据方法（分页数据结构是创建实例时传入的 `responsePage`）。可以直接传给 node http 服务。
   *
   * 响应数据支持 `Mockjs` 的语法规范。
   *
   * @param pageData 单页数据
   * @returns
   * @example
   * const mockIns = new MockUtilClass();
   * await mockIns.mockPageData({ icp: '@icp' })(req, res);
   * // 内部调用 `res.send({ code: '0000', message: 'mock success', pageNum: 1, pageSize: 10, total: 32, pages: 6, data: [ { icp: '陕ICP备69861741号' }, { icp: '闽ICP备82861788号' } ] })`
   */
  mockPageData(pageData: Record<string, any> = {}) {
    return this.mockData(this.options.responsePage!(pageData));
  }
}

export default MockUtilClass;

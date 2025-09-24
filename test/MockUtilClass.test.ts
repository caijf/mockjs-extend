import { MockUtilClass } from '../src';

const sendFn = jest.fn();
const endFn = jest.fn();

const req: any = {};
const res: any = { send: sendFn, end: endFn };

describe('MockUtilClass', () => {
  afterEach(() => {
    endFn.mockRestore();
    sendFn.mockRestore();
  });

  test('basic', async () => {
    const mockIns = new MockUtilClass();

    await mockIns.mockData({ data: { foo: 'baz' } })(req, res);
    expect(sendFn).toHaveBeenCalledTimes(1);
    expect(sendFn.mock.calls[0][0]).toEqual({
      code: '0000',
      message: 'mock success',
      data: { foo: 'baz' }
    });

    await mockIns.mockPageData({ foo: 'baz' })(req, res);
    expect(sendFn).toHaveBeenCalledTimes(2);
    expect(sendFn.mock.calls[1][0]).toMatchObject({
      code: '0000',
      message: 'mock success',
      pageNum: 1,
      pageSize: 10
    });
    expect(endFn).toHaveBeenCalledTimes(0);
  });

  test('custom config', async () => {
    const mockIns = new MockUtilClass({
      delay: 1000,
      sendMethod: 'end',
      responseBasic: {
        errCode: '0000',
        errMsg: 'mock success'
      },
      responsePage(pageData) {
        return {
          total: 22,
          pageData: [pageData]
        };
      }
    });

    await mockIns.mockData({ data: { foo: 'baz' } })(req, res);
    expect(endFn).toHaveBeenCalledTimes(1);
    expect(endFn.mock.calls[0][0]).toEqual(
      JSON.stringify({
        errCode: '0000',
        errMsg: 'mock success',
        data: { foo: 'baz' }
      })
    );

    await mockIns.mockPageData({ data: { foo: 'baz' } })(req, res);
    expect(endFn).toHaveBeenCalledTimes(2);
    expect(JSON.parse(endFn.mock.calls[1][0])).toMatchObject({
      errCode: '0000',
      errMsg: 'mock success',
      total: 22
    });
    expect(sendFn).toHaveBeenCalledTimes(0);
  });

  test('mockData with function', async () => {
    const mockIns = new MockUtilClass();

    await mockIns.mockData((req, res) => {
      res.end({ foo: 'bar' });
    })(req, res);
    expect(sendFn).toHaveBeenCalledTimes(0);
    expect(endFn).toHaveBeenCalledTimes(1);
    expect(endFn.mock.calls[0][0]).toEqual({ foo: 'bar' });
  });

  test('对象解构', async () => {
    const { mockData, mockPageData } = new MockUtilClass();

    await mockData({ data: { foo: 'baz' } })(req, res);
    expect(sendFn).toHaveBeenCalledTimes(1);
    expect(sendFn.mock.calls[0][0]).toEqual({
      code: '0000',
      message: 'mock success',
      data: { foo: 'baz' }
    });

    await mockPageData({ foo: 'baz' })(req, res);
    expect(sendFn).toHaveBeenCalledTimes(2);
    expect(sendFn.mock.calls[1][0]).toMatchObject({
      code: '0000',
      message: 'mock success',
      pageNum: 1,
      pageSize: 10
    });
    expect(endFn).toHaveBeenCalledTimes(0);
  });
});

const {
  add,
  findMax,
  isEven,
  findPost,
  isActivityAvailable,
} = require('./index');
const { dummyPosts, dummyActivity, ACTIVITY_PRIORITY } = require('./dummies');
const axios = require('axios');

Date.now = jest.fn(() => new Date('2023-10-26T14:00:00.000Z'));
jest.mock('axios');

// BASIC EXAMPLE 1:

describe('add', () => {
  it('Adding 1 + 2 should equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('Adding -1 + -2 should equal -3', () => {
    expect(add(-1, -2)).toBe(-3);
  });
});

// BASIC EXAMPLE 2:

describe('isEven', () => {
  it('returns true for 4', () => {
    expect(isEven(4)).toBeTruthy();
    expect(isEven(4)).not.toBeFalsy();
  });

  it('returns false for 11', () => {
    const response = isEven(11);

    expect(response).toBeFalsy();
  });
});

// BASIC EXAMPLE 3:

describe('findMax', () => {
  it('finds the maximum value in an array of positive numbers', () => {
    const numbers = [1, 3, 7, 2, 9];
    expect(findMax(numbers)).toBe(9);
  });

  it('finds the maximum value in an array of negative numbers', () => {
    const numbers = [-5, -2, -8, -1, -3];
    expect(findMax(numbers)).toBe(-1);
  });

  it('finds the maximum value in an array with a single element', () => {
    const numbers = [42];
    expect(findMax(numbers)).toBe(42);
  });

  it('throws an error when the array is empty', () => {
    const emptyArray = [];
    expect(() => findMax(emptyArray)).toThrowError('Array is empty');
  });

  it('throws an error when the array is empty', () => {
    const emptyArray = [];
    let exception;
    try {
      findMax(emptyArray);
    } catch (error) {
      exception = error;
    }
    expect(exception.message).toBe('Array is empty');
  });
});

// MOCK NETWORK REQUEST

describe('findPost', () => {
  it('should return the post with the ID 5', async () => {
    // Mock the response for axios.get
    axios.get.mockResolvedValue({ data: dummyPosts });

    const response = await findPost(5);

    expect(response).toBeDefined();
  });
});

// FUNCTION FROM MOBILE APP REPO

describe('isActivityAvailable', () => {
  it('should return true if today is Thursday and activity should be done on Thursdays and cut-off time has not been reached', () => {
    const response = isActivityAvailable(dummyActivity, '22:00');

    expect(response).toBeTruthy();
  });

  it('should return false if today is Thursday and activity should be done on Thursdays BUT cut-off time HAS been reached and activity priority is STANDARD', () => {
    const response = isActivityAvailable(dummyActivity, '13:00');

    expect(response).toBeFalsy();
  });

  it('should return true if today is Thursday and activity should be done on thursday, cut off time has been reached  and activity priority is HIGH', () => {
    const response = isActivityAvailable({ ...dummyActivity, priority: ACTIVITY_PRIORITY.HIGH }, '13:00');

    expect(response).toBeTruthy();
  })
});

// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber should return true for valid phone numbers', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('844-277-5483')).toBe(true);
});

test('isPhoneNumber should return false for invalid phone numbers', () => {
  expect(isPhoneNumber('24-0149031-40')).toBe(false);
  expect(isPhoneNumber('3245')).toBe(false);
});

test('isEmail should return true for valid emails', () => {
  expect(isEmail('helloworld@gmail.com')).toBe(true);
  expect(isEmail('mpo@testing.gov')).toBe(true);
});

test('isEmail should return false for invalid emails', () => {
  expect(isEmail('feopfejw@')).toBe(false);
  expect(isEmail('aefe@wrng.com.')).toBe(false);
});

test('isStrongPassword should return true for valid passwords', () => {
  expect(isStrongPassword('aBc12_4')).toBe(true);
  expect(isStrongPassword('GJOPW24930')).toBe(true);
});

test('isStrongPassword should return false for invalid passwords', () => {
  expect(isStrongPassword('3255609')).toBe(false);
  expect(isStrongPassword('__ihih8787@$')).toBe(false);
});

test('isDate should return true for valid dates', () => {
  expect(isDate('05/04/2026')).toBe(true);
  expect(isDate('01/01/2026')).toBe(true);
});

test('isDate should return false for invalid dates', () => {
  expect(isDate('2026/05/04')).toBe(false);
  expect(isDate('3/2/25')).toBe(false);
});

test('isHexColor should return true for valid hex colors', () => {
  expect(isHexColor('#007733')).toBe(true);
  expect(isHexColor('#aabbcc')).toBe(true);
});

test('isHexColor should return false for invalid hex colors', () => {
  expect(isHexColor('#AAFFFFF')).toBe(false);
  expect(isHexColor('0000000')).toBe(false);
});
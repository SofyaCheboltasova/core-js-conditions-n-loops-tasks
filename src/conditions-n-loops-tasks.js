/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const maxBetweenAB = a > b ? a : b;
  return maxBetweenAB > c ? maxBetweenAB : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const { x: xq, y: yq } = queen;
  const { x: xk, y: yk } = king;

  if (xq === xk) return true;
  if (yq === yk) return true;
  if (Math.abs(xq - xk) === Math.abs(yq - yk)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  if (a === b || a === c || c === b) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNums = [
    [1, 'I'],
    [4, 'IV'],
    [5, 'V'],
    [9, 'IX'],
    [10, 'X'],
  ];

  let updatednum = num;
  let result = '';
  while (updatednum > 0) {
    for (let i = romanNums.length - 1; i >= 0; i -= 1) {
      const [arabic, roman] = romanNums[i];

      if (updatednum >= arabic) {
        updatednum -= arabic;
        result += roman;
        break;
      }
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const n = numberStr[i];

    switch (n) {
      case '.': {
        result += 'point';
        break;
      }
      case ',': {
        result += 'point';
        break;
      }
      case '-': {
        result += 'minus';
        break;
      }
      default: {
        if (!Number.isNaN(n)) {
          result += words[n];
        }
        break;
      }
    }
    if (i !== numberStr.length - 1) {
      result += ' ';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;

  while (n > 0) {
    const check = n % 10;
    if (check === digit) {
      return true;
    }
    n = Math.trunc(n / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let rightSum = 0;
  let leftSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    rightSum += arr[i];
  }

  for (let i = 0; i <= arr.length - 1; i += 1) {
    const curr = arr[i];
    rightSum -= curr;

    if (leftSum === rightSum) {
      return i;
    }
    leftSum += curr;
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }
  let count = 1;
  let topLine = 0;
  let rightLine = 0;
  let leftLine = 0;
  let bottomLine = 0;

  while (count <= size ** 2) {
    for (let i = leftLine; i < size - rightLine; i += 1) {
      matrix[topLine][i] = count;
      count += 1;
    }
    topLine += 1;

    for (let i = topLine; i < size - bottomLine; i += 1) {
      matrix[i][size - rightLine - 1] = count;
      count += 1;
    }

    rightLine += 1;

    for (let i = size - rightLine - 1; i >= leftLine; i -= 1) {
      matrix[size - bottomLine - 1][i] = count;
      count += 1;
    }

    bottomLine += 1;

    for (let i = size - bottomLine - 1; i >= topLine; i -= 1) {
      matrix[i][leftLine] = count;
      count += 1;
    }

    leftLine += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 *
 */
function rotateMatrix(matrix) {
  const resMatrix = matrix;
  const n = resMatrix.length;

  for (let i = 0; i <= Math.floor(n / 2); i += 1) {
    for (let j = i; j < n - i - 1; j += 1) {
      const v = resMatrix[i][j];
      resMatrix[i][j] = matrix[n - j - 1][i];
      resMatrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      resMatrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      resMatrix[j][n - i - 1] = v;
    }
  }

  return resMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function partition(arr, start, end) {
  const pivot = arr[end];
  const newArr = arr;
  let i = start;

  for (let j = start; j < end; j += 1) {
    if (arr[j] <= pivot) {
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      i += 1;
    }
  }

  [newArr[i], newArr[end]] = [newArr[end], newArr[i]];
  return i;
}

function quickSort(arr, start, end) {
  if (start < end) {
    const i = partition(arr, start, end);
    quickSort(arr, start, i - 1);
    quickSort(arr, i + 1, end);
  }
}

function sortByAsc(arr) {
  quickSort(arr, 0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry' qwerty = qetwry
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425' => '012345'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */

function shuffleOneBack(str) {
  let result = '';
  const strToArr = str.split('');
  const evenArr = strToArr.slice(0, Math.floor(str.length / 2));
  const oddArr = strToArr.slice(Math.floor(str.length / 2), str.length);

  for (let i = 0; i < oddArr.length; i += 1) {
    result += evenArr[i];
    result += oddArr[i];
  }
  if (evenArr.length !== oddArr.length) {
    result += evenArr[evenArr.length - 1];
  }
  return result;
}

function shuffleOne(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    result += str[i];
  }
  for (let i = 1; i < str.length; i += 2) {
    result += str[i];
  }
  return result;
}

function shuffleChar(str, iterations) {
  const itersInCycle = Math.floor(str.length / 2) + 1;
  let iters;
  let strCopy = str;

  if (iterations <= itersInCycle) {
    iters = iterations % itersInCycle;

    if (iters === 0) {
      return str;
    }

    while (iters > 0) {
      strCopy = shuffleOne(strCopy);
      iters -= 1;
    }
  } else {
    const a = Math.floor(iterations / itersInCycle);
    const b = Math.floor(iterations / itersInCycle) + 1;

    const forwardShiftIters = Math.abs(a * itersInCycle - iterations);
    const backShiftIters = Math.abs(b * itersInCycle - iterations);

    if (forwardShiftIters === 0) {
      return str;
    }
    if (backShiftIters === 0) {
      return str;
    }

    if (forwardShiftIters <= backShiftIters) {
      iters = forwardShiftIters;
      while (iters > 0) {
        strCopy = shuffleOne(strCopy);
        iters -= 1;
      }
    } else {
      iters = forwardShiftIters;
      while (iters > 0) {
        strCopy = shuffleOneBack(strCopy);
        iters -= 1;
      }
    }
  }
  return strCopy;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let j = 0;
  let copyNumber = number;

  while (copyNumber > 0) {
    digits[j] = copyNumber % 10;
    copyNumber = Math.floor(copyNumber / 10);
    j += 1;
  }

  let idxOfLess = -1;
  let idxOfBigger = -1;

  for (let i = 0; i < digits.length; i += 1) {
    if (i !== digits.length - 1 && digits[i] > digits[i + 1]) {
      idxOfLess = i + 1;
      idxOfBigger = i;
      break;
    }
  }

  if (idxOfBigger === -1) {
    return number;
  }

  if (idxOfLess === 1) {
    const temp = digits[idxOfLess];
    digits[idxOfLess] = digits[idxOfBigger];
    digits[idxOfBigger] = temp;
  } else {
    const digitsToSwap = [];
    for (let i = 0; i <= idxOfBigger; i += 1) {
      digitsToSwap.push(digits[i]);
    }

    digitsToSwap.sort((a, b) => a - b);

    for (let i = 0; i <= digitsToSwap.length; i += 1) {
      if (digitsToSwap[i] > digits[idxOfLess]) {
        const temp = digitsToSwap[i];
        digitsToSwap[i] = digits[idxOfLess];
        digits[idxOfLess] = temp;
        break;
      }
    }

    digitsToSwap.sort((a, b) => b - a);

    for (let i = 0; i < digitsToSwap.length; i += 1) {
      digits[i] = digitsToSwap[i];
    }
  }

  let result = 0;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    result += digits[i];
    if (i !== 0) result *= 10;
  }
  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};

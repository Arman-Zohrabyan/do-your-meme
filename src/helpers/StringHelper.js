class StringHelper {
  static onlyEngLetters(string) {
    const reg = new RegExp('[^a-zA-Z]+', 'g');
    return string.replace(reg, '');
  }
}

export default StringHelper;

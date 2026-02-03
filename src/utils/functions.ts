/**
 * 
 * @param {string} txt  The text to be sliced
 * @param {number} maxLength  The maximum length of the text
 * @returns {string} The sliced text
 */
export function textSlicer(txt: string, maxLength: number = 50) {
  if (txt.length > maxLength) {
    return txt.substring(0, maxLength) + '...';
  }
  return txt;
}

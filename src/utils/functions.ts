/** 
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


/**
 *  @param {string | number} price The price to be formatted
 *  @return {string} The formatted price with commas
 * 
 */
export const formatPrice = (price: string | number) => {
  const num = typeof price === 'string' ? parseFloat(price) : price;
  if (isNaN(num)) return price;
  return num.toLocaleString(); 
};

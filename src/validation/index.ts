/**
 *
 * @param product - The product object to validate, containing title, description, imageURL, and price.
 * @returns  An object containing any validation errors for the product fields.
 */
export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: '',
    description: '',
    imageURL: '',
    price: '',
  };

  const validUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = 'Title must be between 10 and 80 characters.';
  }

  if (
    !product.description.trim() ||
    product.description.length < 20 ||
    product.description.length > 900
  ) {
    errors.description = 'Description must be between 20 and 900 characters.';
  }

  if (!product.imageURL.trim() || !validUrl.test(product.imageURL)) {
    errors.imageURL = 'Image URL must be a valid URL.';
  }

  if (
    !product.price ||
    isNaN(Number(product.price)) ||
    Number(product.price) <= 0
  ) {
    errors.price = 'Price is required and must be a positive number.';
  }

  return { errors };
};

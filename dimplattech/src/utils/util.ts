
export const formatPrice = (price:string) => {
    const numericValue = price.replace(/[^0-9]/g, "");
  
    const formattedValue = `₦${numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  
    return formattedValue;
  }
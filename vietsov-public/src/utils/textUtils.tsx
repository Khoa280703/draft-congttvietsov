/**
 * Utility functions for text formatting
 */

/**
 * Automatically adds line break after "&" character if text has 2 lines
 * @param text - The text to format
 * @returns Formatted text with line breaks
 */
export const formatTextWithAmpersand = (text: string): string => {
  // Check if text contains "&" and is likely to be 2 lines
  if (text.includes("&")) {
    // Split by "&" and add line break after it
    return text.replace(/&/g, "&\n");
  }
  return text;
};

/**
 * Formats text with ampersand using CSS classes for line breaks
 * @param text - The text to format
 * @returns Formatted text with CSS line break classes
 */
export const formatTextWithAmpersandCSS = (text: string): string => {
  if (text.includes("&")) {
    return text.replace(/&/g, "&<br class='ampersand-break' />");
  }
  return text;
};

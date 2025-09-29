import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Loads and processes HTML content from Google Docs exports
 * @param htmlFilePath - Path to HTML file relative to public folder
 * @returns Processed HTML content ready for display
 */
export function loadHtmlContent(htmlFilePath: string): string {
  try {
    // Read the HTML file from the public directory
    const filePath = join(process.cwd(), 'public', htmlFilePath);
    const htmlContent = readFileSync(filePath, 'utf-8');

    // Extract body content and clean it up
    return processGoogleDocsHtml(htmlContent, htmlFilePath);
  } catch (error) {
    console.error(`Error loading HTML file ${htmlFilePath}:`, error);
    return '<p>Error loading article content.</p>';
  }
}

/**
 * Processes Google Docs HTML to make it suitable for our design system
 * @param html - Raw Google Docs HTML
 * @param htmlFilePath - Path to the HTML file for image path processing
 * @returns Cleaned and processed HTML
 */
function processGoogleDocsHtml(html: string, htmlFilePath: string): string {
  // Extract content between body tags
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    return '<p>No content found in HTML file.</p>';
  }

  let content = bodyMatch[1];

  // Remove Google Docs wrapper div with specific class
  content = content.replace(/<div class="c12[^"]*"[^>]*>([\s\S]*?)<\/div>$/i, '$1');

  // Clean up Google Docs classes - keep structure but remove styling classes
  content = content.replace(/class="[^"]*"/g, '');

  // Fix image paths - convert relative paths to work with Astro
  // Extract the directory name from the htmlFilePath to construct proper image paths
  const htmlDir = htmlFilePath.substring(0, htmlFilePath.lastIndexOf('/'));
  content = content.replace(/src="images\//g, `src="/${htmlDir}/images/`);

  // Remove Google Docs specific styles and attributes
  content = content.replace(/style="[^"]*"/g, '');
  content = content.replace(/data-[^=]*="[^"]*"/g, '');

  // Clean up excessive whitespace
  content = content.replace(/\s+/g, ' ');
  content = content.replace(/>\s+</g, '><');

  // Apply our own classes to common elements
  content = content.replace(/<p>/g, '<p class="article-paragraph">');
  content = content.replace(/<h1>/g, '<h1 class="article-h1">');
  content = content.replace(/<h2>/g, '<h2 class="article-h2">');
  content = content.replace(/<h3>/g, '<h3 class="article-h3">');
  content = content.replace(/<img/g, '<img class="article-image"');
  content = content.replace(/<a/g, '<a class="article-link"');

  return content.trim();
}
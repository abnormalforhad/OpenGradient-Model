import fs from 'fs';
import path from 'path';

const pages = [
  'index.html',
  'models/index.html',
  'ecosystem/index.html',
  'community/index.html'
];

const tailwindConfigStr = "window.tailwind = window.tailwind || {};\n" +
"window.tailwind.config = {\n" +
"  darkMode: 'class',\n" +
"  theme: {\n" +
"    extend: {\n" +
"      colors: {\n" +
"        'outline': '#6e797b',\n" +
"        'on-secondary-fixed-variant': '#004e59',\n" +
"        'on-primary-fixed': '#001f24',\n" +
"        'surface-variant': '#e1e3df',\n" +
"        'outline-variant': '#bec8ca',\n" +
"        'inverse-primary': '#7ed3e1',\n" +
"        'error-container': '#ffdad6',\n" +
"        'error': '#ba1a1a',\n" +
"        'surface-bright': '#f8faf6',\n" +
"        'secondary': '#146875',\n" +
"        'surface': '#f8faf6',\n" +
"        'surface-container-lowest': '#ffffff',\n" +
"        'on-tertiary-fixed': '#001f28',\n" +
"        'primary': '#006570',\n" +
"        'on-tertiary': '#ffffff',\n" +
"        'on-error-container': '#93000a',\n" +
"        'surface-container-highest': '#e1e3df',\n" +
"        'primary-container': '#1c7f8c',\n" +
"        'background': '#f8faf6',\n" +
"        'surface-container-high': '#e7e9e5',\n" +
"        'primary-fixed': '#9bf0fe',\n" +
"        'on-primary-fixed-variant': '#004f58',\n" +
"        'secondary-fixed': '#a7eefd',\n" +
"        'on-surface-variant': '#3e494a',\n" +
"        'on-secondary-fixed': '#001f25',\n" +
"        'surface-dim': '#d8dbd7',\n" +
"        'tertiary-container': '#477b8c',\n" +
"        'surface-container': '#eceeeb',\n" +
"        'on-secondary': '#ffffff',\n" +
"        'on-surface': '#191c1a',\n" +
"        'surface-tint': '#006874',\n" +
"        'inverse-surface': '#2e312f',\n" +
"        'on-tertiary-container': '#f7fcff',\n" +
"        'surface-container-low': '#f2f4f0',\n" +
"        'on-primary-container': '#f3fdff',\n" +
"        'inverse-on-surface': '#eff1ed',\n" +
"        'tertiary': '#2c6273',\n" +
"        'secondary-container': '#a4ebfa',\n" +
"        'tertiary-fixed': '#b6ebfe',\n" +
"        'tertiary-fixed-dim': '#9acee1',\n" +
"        'on-secondary-container': '#1b6c79',\n" +
"        'on-background': '#191c1a',\n" +
"        'on-error': '#ffffff',\n" +
"        'on-primary': '#ffffff',\n" +
"        'primary-fixed-dim': '#7ed3e1',\n" +
"        'on-tertiary-fixed-variant': '#124d5d',\n" +
"        'secondary-fixed-dim': '#8bd1e0'\n" +
"      },\n" +
"      fontFamily: {\n" +
"        'headline': ['Manrope'],\n" +
"        'body': ['Inter'],\n" +
"        'label': ['Space Grotesk']\n" +
"      },\n" +
"      borderRadius: {'DEFAULT': '0.25rem', 'lg': '0.5rem', 'xl': '0.75rem', 'full': '9999px'},\n" +
"    },\n" +
"  },\n" +
"};\n";

const template = (mainContent, title) => "<!DOCTYPE html>\n" +
"<html class=\"light\" lang=\"en\">\n" +
"<head>\n" +
"  <meta charset=\"utf-8\"/>\n" +
"  <meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\"/>\n" +
"  <title>" + title + "</title>\n" +
"  <link href=\"https://fonts.googleapis.com\" rel=\"preconnect\"/>\n" +
"  <link crossorigin=\"\" href=\"https://fonts.gstatic.com\" rel=\"preconnect\"/>\n" +
"  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&family=Space+Grotesk:wght@500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap\" rel=\"stylesheet\"/>\n" +
"  <script src=\"https://cdn.tailwindcss.com?plugins=forms,container-queries\"></script>\n" +
"  <script src=\"/src/tailwind-config.js\"></script>\n" +
"  <style>\n" +
"    .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }\n" +
"    body { font-family: 'Inter', sans-serif; display: flex; flex-direction: column; min-height: 100vh; }\n" +
"    h1, h2, h3 { font-family: 'Manrope', sans-serif; }\n" +
"    .editorial-shadow { box-shadow: 0 40px 60px -15px rgba(25, 28, 26, 0.05); }\n" +
"    .glass-card { background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(16px); box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1); }\n" +
"  </style>\n" +
"</head>\n" +
"<body class=\"bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container\">\n" +
"  <div id=\"layout-nav\"></div>\n" +
"  " + mainContent.trim() + "\n" +
"  <div id=\"layout-footer\"></div>\n" +
"  <script type=\"module\" src=\"/src/main.js\"></script>\n" +
"</body>\n" +
"</html>";

fs.writeFileSync('src/tailwind-config.js', tailwindConfigStr);

for (const p of pages) {
  const content = fs.readFileSync(p, 'utf-8');
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    let mainHtml = mainMatch[0];
    mainHtml = mainHtml.replace(/data-alt=/g, 'alt=');
    
    let title = 'OpenGradient';
    if (p.includes('models')) title = 'Model Hub | OpenGradient';
    if (p.includes('ecosystem')) title = 'Ecosystem | OpenGradient';
    if (p.includes('community')) title = 'Community | OpenGradient';
    
    const finalHtml = template(mainHtml, title);
    fs.writeFileSync(p, finalHtml);
    console.log('Processed', p);
  } else {
    console.warn('Could not find <main> in', p);
  }
}

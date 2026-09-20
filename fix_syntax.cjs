const fs = require('fs');
const path = require('path');
function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.js')) {
      let c = fs.readFileSync(p, 'utf8');
      if (c.includes('\\`') || c.includes('\\${')) {
        console.log('Fixing', p);
        fs.writeFileSync(p, c.replace(/\\`/g, '\`').replace(/\\\$\{/g, '\$\{'));
      }
    }
  });
}
walk('src/pages');

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

// Raw source files are verbatim third-party content with links relative to their original sites
const EXCLUDED_PATHS = [
  'knowledge-base/sources/raw/',
];

function isExcluded(filePath) {
  const rel = path.relative(ROOT, filePath);
  return EXCLUDED_PATHS.some(exc => rel.startsWith(exc));
}

function findMarkdownFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      results.push(...findMarkdownFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

function extractLinks(content) {
  const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
  const links = [];
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    let match;
    while ((match = linkRegex.exec(lines[i])) !== null) {
      const href = match[2].split('#')[0].trim(); // strip anchors
      if (href && !href.startsWith('http') && !href.startsWith('mailto:')) {
        links.push({ line: i + 1, text: match[1], href });
      }
    }
  }
  return links;
}

describe('Internal link validation', () => {
  const files = findMarkdownFiles(ROOT).filter(f => !isExcluded(f));

  for (const file of files) {
    const rel = path.relative(ROOT, file);
    const content = fs.readFileSync(file, 'utf-8');
    const links = extractLinks(content);

    for (const link of links) {
      it(`${rel}:${link.line} → ${link.href}`, () => {
        const target = path.resolve(path.dirname(file), link.href);
        assert.ok(
          fs.existsSync(target),
          `Broken link in ${rel} line ${link.line}: "${link.text}" points to ${link.href} (resolved: ${path.relative(ROOT, target)})`
        );
      });
    }
  }
});

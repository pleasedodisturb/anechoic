import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

// Case-insensitive patterns to ban from content files
const BANNED_PATTERNS = [
  /\bWolt\b/i,
  /\bDoorDash\b/i,
  /\bMx-CRM\b/i,
  /\bMx CRM\b/i,
  /\bcreditornot\b/i,
  /\bPedregal\b/i,
];

// Files/dirs where banned words are acceptable
const EXCLUDED_PATHS = [
  'CHANGELOG.md',                // documents removal history
  'knowledge-base/sources/raw/', // verbatim third-party content
  'tests/',                      // test files themselves
  '.git/',
  'node_modules/',
];

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

function isExcluded(filePath) {
  const rel = path.relative(ROOT, filePath);
  return EXCLUDED_PATHS.some(exc => rel.startsWith(exc));
}

describe('Banned words check', () => {
  const files = findMarkdownFiles(ROOT).filter(f => !isExcluded(f));

  for (const file of files) {
    const rel = path.relative(ROOT, file);

    it(`${rel} contains no banned words`, () => {
      const content = fs.readFileSync(file, 'utf-8');
      const lines = content.split('\n');
      const violations = [];

      for (let i = 0; i < lines.length; i++) {
        for (const pattern of BANNED_PATTERNS) {
          const match = lines[i].match(pattern);
          if (match) {
            violations.push(`  line ${i + 1}: found "${match[0]}" in: ${lines[i].trim()}`);
          }
        }
      }

      assert.equal(
        violations.length, 0,
        `Found banned words in ${rel}:\n${violations.join('\n')}`
      );
    });
  }
});

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

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

describe('Markdown lint', () => {
  const files = findMarkdownFiles(ROOT);

  for (const file of files) {
    const rel = path.relative(ROOT, file);
    const content = fs.readFileSync(file, 'utf-8');

    it(`${rel} starts with a level-1 heading`, () => {
      const firstContentLine = content.split('\n').find(line => line.trim() !== '');
      assert.ok(
        firstContentLine && firstContentLine.startsWith('# '),
        `First non-empty line should be a level-1 heading, got: "${firstContentLine}"`
      );
    });

    it(`${rel} ends with a newline`, () => {
      assert.ok(
        content.endsWith('\n'),
        `File should end with a newline character`
      );
    });

    it(`${rel} has no triple-or-more consecutive blank lines`, () => {
      const violations = [];
      const lines = content.split('\n');
      let blankCount = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === '') {
          blankCount++;
          if (blankCount >= 3) {
            violations.push(`line ${i + 1}: ${blankCount} consecutive blank lines`);
          }
        } else {
          blankCount = 0;
        }
      }
      assert.equal(
        violations.length, 0,
        `Found excessive blank lines in ${rel}:\n${violations.join('\n')}`
      );
    });
  }
});

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

const REQUIRED_FILES = [
  'README.md',
  'START-HERE.md',
  'CHANGELOG.md',
  'knowledge-base/master-index.md',
  'knowledge-base/master-async-playbook.md',
  'knowledge-base/company-comparison-matrix.md',
  'knowledge-base/quick-reference-cards.md',
  'knowledge-base/sources/links.md',
  'frameworks/tpm-communication-framework.md',
  'integration/applying-to-your-project.md',
];

const REQUIRED_DIRS = [
  'knowledge-base/handbook-summaries',
  'knowledge-base/patterns',
  'knowledge-base/sources',
  'frameworks/templates',
  'integration',
];

describe('Repository structure', () => {
  for (const file of REQUIRED_FILES) {
    it(`required file exists: ${file}`, () => {
      const full = path.join(ROOT, file);
      assert.ok(fs.existsSync(full), `Missing required file: ${file}`);
    });
  }

  for (const dir of REQUIRED_DIRS) {
    it(`required directory exists: ${dir}/`, () => {
      const full = path.join(ROOT, dir);
      assert.ok(fs.existsSync(full) && fs.statSync(full).isDirectory(), `Missing required directory: ${dir}`);
    });
  }

  it('handbook-summaries has at least 5 summary files', () => {
    const dir = path.join(ROOT, 'knowledge-base/handbook-summaries');
    const summaries = fs.readdirSync(dir).filter(f => f.endsWith('-summary.md'));
    assert.ok(
      summaries.length >= 5,
      `Expected at least 5 summary files, found ${summaries.length}: ${summaries.join(', ')}`
    );
  });

  it('handbook summaries follow naming convention (*-summary.md)', () => {
    const dir = path.join(ROOT, 'knowledge-base/handbook-summaries');
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
    const nonConforming = files.filter(f => !f.endsWith('-summary.md'));
    assert.equal(
      nonConforming.length, 0,
      `Files not following naming convention: ${nonConforming.join(', ')}`
    );
  });

  it('templates directory has at least 2 template files', () => {
    const dir = path.join(ROOT, 'frameworks/templates');
    const templates = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
    assert.ok(
      templates.length >= 2,
      `Expected at least 2 templates, found ${templates.length}: ${templates.join(', ')}`
    );
  });
});

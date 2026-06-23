#!/usr/bin/env node
/**
 * 将 animal-island theme plugin 中的硬编码 hex 替换为语义 CSS 变量
 */
import fs from 'node:fs';
import path from 'node:path';

const dir = new URL('../packages/themes/animal-island/', import.meta.url).pathname;

const HEX_TO_VAR = [
  ['#19c8b9', 'var(--sa2-primary)'],
  ['#3dd4c6', 'var(--sa2-primary-hover)'],
  ['#11a89b', 'var(--sa2-primary-active)'],
  ['#0ec4b6', 'var(--sa2-btn-loading-bg)'],
  ['#01b0a7', 'var(--sa2-btn-loading-stripe)'],
  ['#4de2da', 'var(--sa2-btn-loading-border)'],
  ['#794f27', 'var(--sa2-text)'],
  ['#725d42', 'var(--sa2-text-body)'],
  ['#9f927d', 'var(--sa2-text-secondary)'],
  ['#8a7b66', 'var(--sa2-text-muted)'],
  ['#a0936e', 'var(--sa2-text-affix)'],
  ['#c4b89e', 'var(--sa2-border-light)'],
  ['#f8f8f0', 'var(--sa2-bg)'],
  ['rgb(247, 243, 223)', 'var(--sa2-bg-content)'],
  ['#f0e8d8', 'var(--sa2-bg-secondary)'],
  ['#ece8dc', 'var(--sa2-bg-disabled)'],
  ['rgb(250, 248, 242)', 'var(--sa2-bg-card-alt)'],
  ['#e6f9f6', 'var(--sa2-primary-bg)'],
  ['#ffcc00', 'var(--sa2-focus)'],
  ['#e0b800', 'var(--sa2-focus-dark)'],
  ['#6fba2c', 'var(--sa2-success)'],
  ['#5a9e1e', 'var(--sa2-success-active)'],
  ['#86d67a', 'var(--sa2-success-bg)'],
  ['#f5c31c', 'var(--sa2-warning)'],
  ['#dba90e', 'var(--sa2-warning-active)'],
  ['#e05a5a', 'var(--sa2-error)'],
  ['#e87878', 'var(--sa2-error-hover)'],
  ['#c94444', 'var(--sa2-error-active)'],
  ['#bdaea0', 'var(--sa2-border-handle)'],
  ['#d4c9b4', 'var(--sa2-shadow-input)'],
  ['#a89878', 'var(--sa2-border-hover)'],
  ['#e8dcc8', 'var(--sa2-border-dashed)'],
  ['#d4c4a8', 'var(--sa2-border-dashed-hover)'],
  ['#f8a6b2', 'var(--sa2-card-pink)'],
  ['#b77dee', 'var(--sa2-card-purple)'],
  ['#889df0', 'var(--sa2-card-blue)'],
  ['#f7cd67', 'var(--sa2-card-yellow)'],
  ['#e59266', 'var(--sa2-card-orange)'],
  ['#82d5bb', 'var(--sa2-card-teal)'],
  ['#8ac68a', 'var(--sa2-card-green)'],
  ['#fc736d', 'var(--sa2-card-red)'],
  ['#d1da49', 'var(--sa2-card-lime)'],
  ['#ecdf52', 'var(--sa2-card-yellow-green)'],
  ['#9a835a', 'var(--sa2-card-brown)'],
  ['#e18c6f', 'var(--sa2-card-peach)'],
];

const files = fs.readdirSync(dir).filter((f) => f.startsWith('animal-plugin') && f.endsWith('.js'));

for (const file of files) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');
  let count = 0;
  for (const [hex, cssVar] of HEX_TO_VAR) {
    const re = new RegExp(hex.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    const before = content;
    content = content.replace(re, cssVar);
    if (content !== before) count++;
  }
  fs.writeFileSync(fp, content);
  console.log(`${file}: ${count} color groups replaced`);
}

console.log('Done');

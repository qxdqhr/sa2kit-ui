#!/usr/bin/env node
/**
 * SA2Kit UI 方案2 迁移脚本：重命名 scope、类名、Tailwind token
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.turbo', '.expo', '.swc']);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(tsx?|jsx?|json|md|css|mjs|yaml|yml|html)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const REPLACEMENTS = [
  ['@sa2kit-ui/', '@sa2kit-ui/'],
  ['sa2kit-ui', 'sa2kit-ui'],
  ['SA2Kit UI', 'SA2Kit UI'],
  ['SA2Kit UI ·', 'SA2Kit UI ·'],
  // Tailwind 语义色
  ['bg-sa2-bg', 'bg-sa2-bg'],
  ['text-sa2-text-secondary', 'text-sa2-text-secondary'],
  ['text-sa2-text', 'text-sa2-text'],
  ['text-sa2-success', 'text-sa2-success'],
  ['text-sa2-bg', 'text-sa2-bg'],
  ['text-inherit', 'text-inherit'],
  // 组件类 ai- → sa2-
  ['sa2-font', 'sa2-font'],
  ['sa2-btn', 'sa2-btn'],
  ['sa2-input', 'sa2-input'],
  ['sa2-switch', 'sa2-switch'],
  ['sa2-card', 'sa2-card'],
  ['sa2-modal', 'sa2-modal'],
  ['sa2-title', 'sa2-title'],
  ['sa2-tabs', 'sa2-tabs'],
  ['sa2-collapse', 'sa2-collapse'],
  ['sa2-checkbox', 'sa2-checkbox'],
  ['sa2-radio', 'sa2-radio'],
  ['sa2-select', 'sa2-select'],
  ['sa2-tooltip', 'sa2-tooltip'],
  ['sa2-loading', 'sa2-loading'],
  ['sa2-divider', 'sa2-divider'],
  ['sa2-time', 'sa2-time'],
  ['sa2-codeblock', 'sa2-codeblock'],
  ['sa2-table', 'sa2-table'],
  ['sa2-icon', 'sa2-icon'],
  ['sa2-footer', 'sa2-footer'],
  ['sa2-phone', 'sa2-phone'],
  ['sa2-wallet', 'sa2-wallet'],
  ['sa2-wedding', 'sa2-wedding'],
  ['sa2-cursor', 'sa2-cursor'],
  // wedding 子类
  ['sa2-wedding-', 'sa2-wedding-'],
  // plugin 工具类
  ['.sa2-', '.sa2-'],
  // keyframes in CSS strings (already in preset)
  ['sa2-btn-loading', 'sa2-btn-loading'],
  ['sa2-spin', 'sa2-spin'],
  ['sa2-fade-in', 'sa2-fade-in'],
  ['sa2-zoom-in', 'sa2-zoom-in'],
  ['sa2-leaf-wiggle', 'sa2-leaf-wiggle'],
  ['sa2-tab-fade-in', 'sa2-tab-fade-in'],
  ['sa2-checkbox-pop', 'sa2-checkbox-pop'],
  ['sa2-radio-pop', 'sa2-radio-pop'],
  ['sa2-loading-dash', 'sa2-loading-dash'],
  ['sa2-time-blink', 'sa2-time-blink'],
  ['sa2-time-fade-up', 'sa2-time-fade-up'],
  ['sa2-icon-bounce', 'sa2-icon-bounce'],
  ['sa2-grasswave', 'sa2-grasswave'],
  ['sa2-phone-blink', 'sa2-phone-blink'],
  ['sa2-phone-icon-bounce', 'sa2-phone-icon-bounce'],
  ['sa2-wallet-bag', 'sa2-wallet-bag'],
  // tailwind theme() refs in plugins
  ["theme('fontFamily.sa2')", "theme('fontFamily.sa2')"],
  ["theme('boxShadow.sa2-sm')", "theme('boxShadow.sa2-sm')"],
  ["theme('boxShadow.sa2-base')", "theme('boxShadow.sa2-base')"],
  ["theme('boxShadow.sa2-lg')", "theme('boxShadow.sa2-lg')"],
];

// 反向修复双重替换
const FIX_DOUBLE = [
  ['sa2-', 'sa2-'],
  ['sa2-', 'sa2-'],
];

function transform(content) {
  let out = content;
  for (const [from, to] of REPLACEMENTS) {
    out = out.split(from).join(to);
  }
  for (const [from, to] of FIX_DOUBLE) {
    out = out.split(from).join(to);
  }
  return out;
}

const files = walk(ROOT).filter(
  (f) => !f.includes('/node_modules/') && !f.includes('/dist/') && !f.endsWith('pnpm-lock.yaml'),
);

let changed = 0;
for (const file of files) {
  const before = fs.readFileSync(file, 'utf8');
  const after = transform(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
  }
}

console.log(`Migrated ${changed} files`);

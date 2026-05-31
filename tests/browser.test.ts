import { describe, expect, it } from 'bun:test'

import { resolveCssVar } from '@/browser/index'

describe('browser', () => {
  it('resolveCssVar: undefined variable returns empty string', () => {
    expect(resolveCssVar('var(--a-undefined-css-variable)')).toBe('')
  })

  it('resolveCssVar: defined variable returns its value', () => {
    document.documentElement.style.setProperty('--test-color', 'red')
    expect(resolveCssVar('var(--test-color)')).toBe('red')
  })

  it('resolveCssVar: non-var string returns as-is', () => {
    expect(resolveCssVar('not-a-css-var')).toBe('not-a-css-var')
  })
})

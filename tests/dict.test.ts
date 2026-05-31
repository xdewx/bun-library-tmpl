import { describe, expect, it } from 'bun:test'
import { dict } from '@/index'

describe('dict', () => {
  it('join: custom delimiters', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const opts = {
      kvDelimeter: '=',
      entryDelimeter: ',',
    }
    expect(dict.join(obj, opts)).toBe('a=1,b=2,c=3')
  })

  it('join: default options', () => {
    const obj = { a: 1, b: 2 }
    expect(dict.join(obj)).toBe('a:1\nb:2')
  })

  it('join: empty object returns empty string', () => {
    expect(dict.join({})).toBe('')
  })

  it('join: excludes nil values by default', () => {
    const obj = { a: 1, b: null, c: undefined }
    expect(dict.join(obj)).toBe('a:1')
  })

  it('join: includes nil values when excludeNil is false', () => {
    const obj = { a: 1, b: null, c: undefined }
    const result = dict.join(obj, { excludeNil: false })
    expect(result).toContain('a:1')
    expect(result).toContain('b:null')
    expect(result).toContain('c:undefined')
  })

  it('name', () => {
    expect(dict.name()).toBe('dict')
  })
})

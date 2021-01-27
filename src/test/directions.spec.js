import '@testing-library/jest-dom/extend-expect'
import { isLTR, isRTL, setLocale } from '../lang'
import setup from './setup'

describe('testing Directions', () => {
  it('after setting locale with RTL option, HTML & BODY nodes should have the direction of RTL', () => {
    setup('ar')
    const HTMLNode = document.getElementsByTagName('html')[0]
    const bodyNode = document.getElementsByTagName('body')[0]
    expect(HTMLNode.dir).toBe('rtl')
    expect(bodyNode.dir).toBe('rtl')
  })

  it('after setting locale with RTL option, isRTL should be true', () => {
    setup('ar')
    expect(isRTL).toBe(true)
  })

  it('after setting locale with RTL option, isLTR should be false', () => {
    setup('ar')
    expect(isLTR).toBe(false)
  })
  it('validate changing locale changes isRTL value', () => {
    setup('ar')
    expect(isRTL).toBe(true)
    setLocale('en')
    expect(isRTL).toBe(false)
  })
  it('validate changing locale changes isLTR value', () => {
    setup('ar')
    expect(isLTR).toBe(false)
    setLocale('en')
    expect(isLTR).toBe(true)
  })
})

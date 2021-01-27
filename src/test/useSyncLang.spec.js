import React, { memo } from 'react'
import { act, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { lang, setLocale } from '../lang'
import { useSyncLang } from '../hook'
import setup from './setup'

describe('Testing useSyncLang Hook', () => {
  const TestComponent = () => {
    useSyncLang()
    return (
      <div>
        <h1>{lang.welcome}</h1>
        <button onClick={() => setLocale('es')}>switch lang</button>
      </div>
    )
  }
  const Memoized = memo(TestComponent)

  it('should be able to change memoized component locale from English to Arabic', () => {
    setup('en')
    const { getByText, container } = render(<Memoized />)
    const button = container.querySelector('button')
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(getByText('Hola')).toBeInTheDocument()
  })
})

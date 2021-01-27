import React from 'react'
import { act, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { lang, setLocale } from '../lang'
import { withSyncLang } from '../hoc'
import setup from './setup'

describe('Testing withSyncLang HOC', () => {
  class TestComponent extends React.PureComponent {
    render() {
      return (
        <div>
          <h1>{lang.welcome}</h1>
          <button onClick={() => setLocale('es')}>switch lang</button>
        </div>
      )
    }
  }
  const HocComponent = withSyncLang(TestComponent)

  it('should be able to change pure class component locale from English to Arabic', () => {
    setup('en')
    const { getByText, container } = render(<HocComponent />)
    const button = container.querySelector('button')
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(getByText('Hola')).toBeInTheDocument()
  })
})

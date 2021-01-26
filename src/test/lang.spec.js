import React from 'react'
import { render } from '@testing-library/react'
import { lang, setLocale } from '../lang'
import setup from './setup'

describe('lang', () => {
  class TestComponent extends React.Component {
    render() {
      return <div>{lang.welcome}</div>
    }
  }

  it('should render correct English as default language', () => {
    setup('en')
    const { container } = render(<TestComponent />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        Welcome
      </div>
    `)
  })

  it('should render correct Arabic as default language', () => {
    setup('ar')
    const { container } = render(<TestComponent />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        مرحبا
      </div>
    `)
  })

  it('should render correct Spanish as default language', () => {
    setup('es')
    const { container } = render(<TestComponent />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        Hola
      </div>
    `)
  })
  it('should be able to change locale from English to Arabic after component rendering', () => {
    setup('en')
    setLocale('ar')
    const { container } = render(<TestComponent />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        مرحبا
      </div>
    `)
  })
})

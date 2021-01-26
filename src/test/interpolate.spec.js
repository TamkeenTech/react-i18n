import React from 'react'
import { render } from '@testing-library/react'
import { interpolate } from '../lang'
import setup from './setup'

describe('interpolate', () => {
  class TestComponent extends React.Component {
    render() {
      return <div>{interpolate('btns.toSpanish')}</div>
    }
  }

  it('should render correct English content', () => {
    setup('en')
    const { container } = render(<TestComponent />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        Translate to Spanish
      </div>
    `)
  })
})

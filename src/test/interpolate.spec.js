import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { interpolate } from '../lang'
import setup from './setup'

describe('interpolate', () => {
  class TestComponent extends React.Component {
    render() {
      return <button>{interpolate('btns.toSpanish')}</button>
    }
  }

  it('should render correct English content', () => {
    setup('en')
    const { getByText } = render(<TestComponent />)
    expect(getByText('Translate to Spanish')).toBeInTheDocument()
  })
})

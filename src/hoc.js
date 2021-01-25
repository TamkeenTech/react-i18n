import React from 'react'
import { langResource } from './lang'

export function withSyncLang(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
      langResource.addListener(this.handleAddEventListener)
    }

    componentWillUnmount() {
      langResource.removeListener(this.handleAddEventListener)
    }

    handleAddEventListener = () => this.setState({ updated: Date.now() })

    render() {
      return (
        <WrappedComponent react-i18n-translator-updated={this.state.updated} />
      )
    }
  }
}

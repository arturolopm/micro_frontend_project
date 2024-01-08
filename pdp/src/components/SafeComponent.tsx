import React from 'react';

interface SafeComponentState {
  hasError: boolean;
}
export default class SafeComponent extends React.Component<{}, SafeComponentState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  componentDidCatch(error: Error): void {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

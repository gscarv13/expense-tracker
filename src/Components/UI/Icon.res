module Icon = {
  @module("@iconify/react") @react.component
  external make: (~icon: string, ~onClick: 'c=?) => React.element = "Icon"
}

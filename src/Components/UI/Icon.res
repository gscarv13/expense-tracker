module Icon = {
  @module("@iconify/react") @react.component
  external make: (
    ~icon: string,
    ~onClick: 'c=?,
    ~width: string=?,
    ~height: string=?,
    ~style: option<'a>=?,
  ) => React.element = "Icon"
}

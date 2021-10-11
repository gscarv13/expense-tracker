module Icon = {
  @module("@iconify/react") @react.component
  external make: (
    ~icon: string,
    ~onClick: 'c=?,
    ~width: string=?,
    ~height: string=?,
  ) => React.element = "Icon"
}

//width="20" height="20"

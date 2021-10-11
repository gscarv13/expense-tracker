%%raw("import './ExpenseIcon.css'")
open Icon

@react.component
let make = (~iconName: string, ~bgColor: string) => {
  <div className="expense-icon" style={ReactDOM.Style.make(~background=bgColor, ())}>
    <Icon icon={iconName} width="20" height="20" />
  </div>
}

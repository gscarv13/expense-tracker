%%raw("import './ExpenseItem.css'")

@react.component
let make = (
  ~iconName: string,
  ~bgColor: string,
  ~title: string,
  ~amount: string,
  ~date: Js.Date.t,
) => {
  <li>
    <div className="expense-item">
      <ExpenseIcon iconName={iconName} bgColor={bgColor} />
      <div className="expense-item__description"> <h2> {title->React.string} </h2> </div>
      <div>
        <p className="expense-item__price"> {`$ ${amount}`->React.string} </p>
        <ExpenseDate date={date} />
      </div>
    </div>
  </li>
}

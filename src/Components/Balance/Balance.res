%%raw("import './Balance.css'")

open Icon

@react.component
let make = () => {
  let balance = "6500"
  let totalIncome = "12500"
  let totalExpense = "6000"
  <Card>
    <div>
      <p> {"total balance"->React.string} </p>
      <p className="balance__total"> {("$ " ++ balance)->React.string} </p>
    </div>
    <div className="balance__details">
      <div className="balance__change">
        <Icon icon={"whh:arrowup"} style={ReactDOM.Style.make(~color="#78DD59", ())} />
        <div> <p> {"Income"->React.string} </p> <p> {totalIncome->React.string} </p> </div>
      </div>
      <div className="balance__change">
        <Icon icon="whh:arrowdown" style={ReactDOM.Style.make(~color="#f05d64")} />
        <div>
          <p> {"expense"->React.string} </p> <p> {("$ " ++ totalExpense)->React.string} </p>
        </div>
      </div>
    </div>
  </Card>
}

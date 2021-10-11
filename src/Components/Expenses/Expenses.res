%%raw("import './Expenses.css'")

type expenseItemType = {
  id: string,
  title: string,
  amount: string,
  date: Js.Date.t,
  category: string,
}

@module("../../Constants/demoExpenses")
external expenses: array<ExpenseList.expenseItemType> = "default"

@react.component
let make = () => {
  <div className="expenses"> <ExpenseList filteredExpenses={expenses} /> </div>
}

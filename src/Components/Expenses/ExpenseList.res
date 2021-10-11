%%raw("import './ExpenseList.css'")
@module external iconInfo: 'a = "../../Constants/iconsInfo"

type expenseItemType = {
  id: string,
  title: string,
  amount: string,
  date: Js.Date.t,
  category: string,
}

@react.component
let make = (~filteredExpenses: array<expenseItemType>) => {
  let expenseList = filteredExpenses->Belt.Array.map(item => {
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
      iconName={%raw("iconInfo.iconNames[item.category]")}
      bgColor={%raw("iconInfo.iconColors[item.category]")}
    />
  })
  <ul className="expenses-list"> {React.array(expenseList)} </ul>
}

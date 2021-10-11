%%raw("import './ExpenseDate.css'")

@react.component
let make = (~date) => {
  // let formattedDate = new Intl.DateTimeFormat(localeLang, options).format(date);
  let formattedDate = Js.Date.toLocaleDateString(date)
  <p className="expense-date"> {formattedDate->React.string} </p>
}

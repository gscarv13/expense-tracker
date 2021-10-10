%%raw("import './NewExpense.css'")

@react.component
let make = () => {
  let (openForm, setOpenForm) = React.useState(_ => false)

  let onClick = _evt => {
    setOpenForm(prevState => !prevState)
  }
  <div className="new-expense">
    {openForm
      ? <form> <input type_="text" placeholder="INPUT" /> </form>
      : <button className="form-button" type_="button" onClick>
          {"Add New Expense"->React.string}
        </button>}
  </div>
}

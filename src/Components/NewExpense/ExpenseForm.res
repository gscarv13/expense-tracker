%%raw("import './ExpenseForm.css'")
open Icon

@react.component
let make = () => {
  let (titleInput, setTitleInput) = React.useState(_ => "")
  let (dateInput, setDateInput) = React.useState(_ => "")
  let (amountInput, setAmountInput) = React.useState(_ => "0.01")

  let onInputChange = evt => {
    let targetValue = ReactEvent.Form.currentTarget(evt)["value"]
    let targetId = ReactEvent.Form.currentTarget(evt)["id"]

    switch targetId {
    | "amount" => setAmountInput(targetValue)
    | "title" => setTitleInput(targetValue)
    | "date" => setDateInput(targetValue)
    }
  }

  let submitHandler = evt => {
    ReactEvent.Form.preventDefault(evt)
    let expense = {
      "title": titleInput,
      "amount": amountInput,
      "date": dateInput,
    }

    Js.log(expense)

    setAmountInput(_ => "")
    setTitleInput(_ => "")
    setDateInput(_ => "")
  }

  <div className="new-expense__container">
    <button className="new-expense__close" type_="button"> <Icon icon="whh:x" /> </button>
    <form onSubmit={submitHandler}>
      <div className="new-expense__amount">
        <span className="money"> {React.string("$")} </span>
        <input
          id="amount"
          type_="number"
          min="0.01"
          step={0.01}
          value={amountInput}
          onChange={onInputChange}
        />
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <Icon icon="whh:stickynote" />
          <input
            id="title" type_="text" placeholder="Notes" value={titleInput} onChange={onInputChange}
          />
        </div>
        <div className="new-expense__control">
          <Icon icon="whh:notesdatealt" />
          <input
            id="date" type_="date" min="2021-01-01" value={dateInput} onChange={onInputChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="form-button" type_="submit"> {React.string("Add Expense")} </button>
      </div>
    </form>
  </div>
}

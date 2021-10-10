// make is equivalent to export default in vanilla JavaSript
// the tilt ~ specifies a named argument
@react.component
let make = (~text) => {
  // You can also specify the type as below!
  // {"Hello World" -> React.string }
  <div> {React.string(text)} </div>
}

// TO IMPORT CSS:
// @module external styles: {..} = "./styles.module.css" <-- CSS modules
// %%raw("import './NewExpense.css'")

// Js.log("asd") <--  console log

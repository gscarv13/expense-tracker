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

// To convert option<type> into type use Belt.Option.getExn()
// eg: let maybeNull: option<string> = "asd"
// Belt.Option.getExn(maybeNull) // => "asd" : string

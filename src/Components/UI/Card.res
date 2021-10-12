%%raw("import './Card.css'")

@react.component
let make = (~classes: option<string>=?, ~children) => {
  let classesList = Belt.Option.getExn(classes)
  let htmlClasses = `card ${classesList}`
  <div className={htmlClasses}> {children} </div>
}

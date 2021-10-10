@module external styles: string => string = "./Card.css"

@react.component
let make = (~classes, ~children) => {
  let htmlClasses = `card ${classes}`
  <div className={htmlClasses}> {children} </div>
}

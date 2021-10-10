@module external styles: string => string = "./GridContainer.css"
@react.component
let make = (~classes, ~children) => {
  let allHTMLClasses = `grid-container ${classes}`
  <div className={allHTMLClasses}> {children} </div>
}

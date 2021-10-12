module Info = {
  type iconData = Js.Dict.t<string>

  let iconClassNames: iconData = Js.Dict.fromArray([
    ("Travel", "whh:travel"),
    ("Food", "whh:fork"),
    ("Clothing", "whh:tshirt"),
    ("Rent", "whh:house"),
    ("Electronics", "whh:hdtv"),
    ("Transport", "whh:bus"),
    ("Furniture", "whh:desklamp"),
    ("Pet", "whh:paw"),
    ("Other", "whh:tags"),
  ])

  let iconColors: iconData = Js.Dict.fromArray([
    ("Travel", "linear-gradient(90deg, rgba(19,53,161,1) 0%, rgba(0,173,232,1) 100%)"),
    ("Food", "linear-gradient(180deg, rgba(251,90,90,1) 0%, rgba(215,33,34,1) 100%)"),
    ("Clothing", "linear-gradient(180deg, rgba(109, 224, 212, 1) 0%, rgba(6, 182, 153, 1) 100%)"),
    ("Rent", "linear-gradient(180deg, rgba(251,205,120,1) 0%, rgba(252,176,41,1) 100%)"),
    ("Electronics", "linear-gradient(180deg, rgba(227,161,229,1) 0%, rgba(114,48,230,1) 100%)"),
    ("Transport", "linear-gradient(90deg, rgba(19,53,161,1) 0%, rgba(0,173,232,1) 100%)"),
    ("Furniture", "linear-gradient(180deg, rgba(251,90,90,1) 0%, rgba(215,33,34,1) 100%)"),
    ("Pet", "linear-gradient(180deg, rgba(109, 224, 212, 1) 0%, rgba(6, 182, 153, 1) 100%)"),
    ("Other", "linear-gradient(180deg, rgba(251,205,120,1) 0%, rgba(252,176,41,1) 100%)"),
  ])
}

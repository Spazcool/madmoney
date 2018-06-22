**FUNCTIONALITY**
  *Calculator*
    []CLEAN INPUTS to numbers, dont trust user
    []loop through calculator inputs to change to int and clean from user
    []if not numbers input box should light up warning user

    []print view button
    []data items will be renamed in french
    []revenus inputs monthlyRent on top
    []downloads button
    []lostMonthes tooltip positioned over everfything else, needs to be below navbar
    []frais montthly items need to be differentiated by color or theme
    []slider for administrative
    administrative output needs to be the annual amount lost not the percentage

**NICETIES**
  []title links black to blue
  []fade in for 'looking for something types'
  []consistent color theme, links, dropdown, background, sections, text, etc
    []use bulma is-primary classes for ^^^
  []page loader? instead of loading icons => https://wikiki.github.io/elements/pageloader/
  []carousel for the banner img? => https://wikiki.github.io/components/carousel/

**DEPLOY**
  []AWS?
oldProperty in calculator needs to change to propriete ancienne
in INPUTS
  map over an array with the useful information labled accoridngly
  data-tooltip={"Some useful info about this thing."}>

RENAME
  frais:{
    annuels
  },
  depenses [all inputs to be based on a yearly rate] (depenses annuelles totales for output):{
    gestion (monthly)
    copropriete (yearly)
    divers (yearly)
    taxe fonciere (yearly)
    assurance habitation (yearly)
    entretien (yearly)
  },
  remboursement de pret:{
    mensualite
  },
  prix total d'acquisition (same name for output):{
    prix d'achat (FAI)
    frais de renovation
    propriete ancienne
  },
  recette locative (recette locative annuelle for output):{
    vacance
    loyer mensuel

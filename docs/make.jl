using ThermoProbe
using Documenter

DocMeta.setdocmeta!(ThermoProbe, :DocTestSetup, :(using ThermoProbe); recursive=true)

makedocs(;
    modules=[ThermoProbe],
    authors="Vinod Janardhanan",
    repo="https://github.com/vinodjanardhanan/ThermoProbe.jl/blob/{commit}{path}#{line}",
    sitename="ThermoProbe.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://vinodjanardhanan.github.io/ThermoProbe.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
    ],
)

deploydocs(;
    repo="github.com/vinodjanardhanan/ThermoProbe.jl",
    devbranch="main",
)

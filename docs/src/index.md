```@meta
CurrentModule = ThermoProbe
```

# ThermoProbe

Documentation for [ThermoProbe](https://github.com/vinodjanardhanan/ThermoProbe.jl).
Thermoprobe is a program for calculating the thermodynamic properties of pure species at a given temperature or for a mixture at a given temperature, pressure and composition. The program evaluates these properties using the NASA polynomials. For further details, please refer to the library section on thermodynamic properties

## Installation
To install the package, use the following commands in the julia REPL
```julia
julia> using Pkg
julia> Pkg.add("ThermoProbe")
```
## General interface
```@index
```

```@autodocs
Modules = [ThermoProbe]
```

## Executing the code
The code is invoked by using the following method.

On the Julia REPL 
```julia
julia>using ThermoProbe
julia>thermoprobe("thermo_probe.xml","../lib/")
```

## Input file
The method takes two arguments *input\_file* and *lib\_dir*. The input\_files specifies the input XML file (in this example it is "thermo_probe.xml") and lib\_dir speficies the path to the data files folder where *therm.dat* is present. The structure of the XML input file is shown below.

```
<?xml version="1.0" encoding="ISO-8859-1"?>
<thermo_probe>
    <gasphase>CH4 CO CO2 H2 H2O O2 N2</gasphase>
    <massfractions>CH4=0.2,H2O=0.4,N2=0.4</massfractions>
    <T>298.15</T>
    <p>1e5</p>
</thermo_probe>
```
The meaning of different XML tags is explained below.

- <thermo_probe> : tag specifying the model
- <gasphase> : list of gas-phase species for which the thermodynamic properties need to be calculated. The species names must be separated by white spaces or tab
- <massfractions> : mass fractions of the gas-phase species. Instead of mass fractions, mole fractions may also be specified. In that case, the tag must be <molefractions>. You must ensure that the sum of mass or mole fractions specified is unity. There are no internal checks to verify this.
- <T>: Temperature in K
- <p> : Pressure in Pa

## Input file download
The xml input file may be downloaded from [here](https://github.com/vinodjanardhanan/RSimExamples/tree/main/thermo_probe). The *therm.dat* file may be downloaded from a number of online resources. You may also download the same from [here] (https://github.com/vinodjanardhanan/RSimExamples/tree/main/lib).

## Output
The code does not generate any file output.  An example of terminal output that thermoprobe generates is shown below.

```
Thermodynamic properties of pure species at 298.15(K) and 100000.0(Pa)

Species          Enthalpy(J/mol)         Entropy(J/mol-K)        cp(J/mol-K)

CH4              -7.4600e+04             +1.8637e+02             3.5691e+01 
CO               -1.1053e+05             +1.9766e+02             2.9141e+01 
CO2              -3.9351e+05             +2.1379e+02             3.7135e+01 
H2               +1.3282e-05             +1.3068e+02             2.8836e+01 
H2O              -2.4182e+05             +1.8883e+02             3.3588e+01 
O2               +1.6343e-05             +2.0515e+02             2.9378e+01 
N2               +1.4299e+00             +1.9151e+02             2.9071e+01 

Mixture properties

Enthalpy (J/mol): -1.286916e+05 
Specific Heat (J/mol-K): 1.889851e+02 
Gibbs free energy (J/mol): -1.876808e+05 
```


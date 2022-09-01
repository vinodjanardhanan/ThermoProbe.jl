var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = ThermoProbe","category":"page"},{"location":"#ThermoProbe","page":"Home","title":"ThermoProbe","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for ThermoProbe. Thermoprobe is a program for calculating the thermodynamic properties of pure species at a given temperature or for a mixture at a given temperature, pressure and composition. The program evaluates these properties using the NASA polynomials. For further details, please refer to the library section on thermodynamic properties","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install the package, use the following commands in the julia REPL","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Pkg\njulia> Pkg.add(\"ThermoProbe\")","category":"page"},{"location":"#General-interface","page":"Home","title":"General interface","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ThermoProbe]","category":"page"},{"location":"#ThermoProbe.thermoprobe-Tuple{AbstractString, AbstractString}","page":"Home","title":"ThermoProbe.thermoprobe","text":"This function reads the xml input file      and calculates the pure species and mixture properties at     the specified temperature and pressure\n\nUsage:\n\nthermoprobe(inputfile, libdir)\ninput_file: name of the xml input file\nlib_dir: path to the folder where the data files are present\n\n\n\n\n\n","category":"method"},{"location":"#Executing-the-code","page":"Home","title":"Executing the code","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The code is invoked by using the following method.","category":"page"},{"location":"","page":"Home","title":"Home","text":"On the Julia REPL ","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia>using ThermoProbe\njulia>thermoprobe(\"thermo_probe.xml\",\"../lib/\")","category":"page"},{"location":"#Input-file","page":"Home","title":"Input file","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The method takes two arguments input_file and lib_dir. The input_files specifies the input XML file (in this example it is \"thermoprobe.xml\") and lib\\dir speficies the path to the data files folder where therm.dat is present. The structure of the XML input file is shown below.","category":"page"},{"location":"","page":"Home","title":"Home","text":"<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<thermo_probe>\n    <gasphase>CH4 CO CO2 H2 H2O O2 N2</gasphase>\n    <massfractions>CH4=0.2,H2O=0.4,N2=0.4</massfractions>\n    <T>298.15</T>\n    <p>1e5</p>\n</thermo_probe>","category":"page"},{"location":"","page":"Home","title":"Home","text":"The meaning of different XML tags is explained below.","category":"page"},{"location":"","page":"Home","title":"Home","text":"<thermo_probe> : tag specifying the model\n<gasphase> : list of gas-phase species for which the thermodynamic properties need to be calculated. The species names must be separated by white spaces or tab\n<massfractions> : mass fractions of the gas-phase species. Instead of mass fractions, mole fractions may also be specified. In that case, the tag must be <molefractions>. You must ensure that the sum of mass or mole fractions specified is unity. There are no internal checks to verify this.\n<T>: Temperature in K\n<p> : Pressure in Pa","category":"page"},{"location":"#Input-file-download","page":"Home","title":"Input file download","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The xml input file and the lib directory containig other required input files may be downloaded from here.","category":"page"},{"location":"#Output","page":"Home","title":"Output","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The code does not generate any file output.  An example of terminal output that thermoprobe generates is shown below.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Thermodynamic properties of pure species at 298.15(K) and 100000.0(Pa)\n\nSpecies          Enthalpy(J/mol)         Entropy(J/mol-K)        cp(J/mol-K)\n\nCH4              -7.4600e+04             +1.8637e+02             3.5691e+01 \nCO               -1.1053e+05             +1.9766e+02             2.9141e+01 \nCO2              -3.9351e+05             +2.1379e+02             3.7135e+01 \nH2               +1.3282e-05             +1.3068e+02             2.8836e+01 \nH2O              -2.4182e+05             +1.8883e+02             3.3588e+01 \nO2               +1.6343e-05             +2.0515e+02             2.9378e+01 \nN2               +1.4299e+00             +1.9151e+02             2.9071e+01 \n\nMixture properties\n\nEnthalpy (J/mol): -1.286916e+05 \nSpecific Heat (J/mol-K): 1.889851e+02 \nGibbs free energy (J/mol): -1.876808e+05 ","category":"page"}]
}

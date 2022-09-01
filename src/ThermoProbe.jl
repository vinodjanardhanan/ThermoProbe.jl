module ThermoProbe

using LightXML, Printf, IdealGas, RxnHelperUtils

export thermoprobe
"""
This function reads the xml input file 
    and calculates the pure species and mixture properties at
    the specified temperature and pressure
#   Usage:
-   thermoprobe(input_file, lib_dir)
-   input_file: name of the xml input file
-   lib_dir: path to the folder where the data files are present
"""
function thermoprobe(input_file::AbstractString, lib_dir::AbstractString)

 
    #load the xml file
    xmldoc = parse_file(input_file)
    xmlroot = root(xmldoc) 

    local molwt = Array{Float64,1}()
    local mole_fracs = Array{Float64,1}()
    local gas_species = Array{String,1}()
    local thermo_obj::IdealGas.SpeciesThermoObj

    gas_species = get_collection_from_xml(xmlroot,"gasphase")
    thermo_file = get_path(lib_dir, "therm.dat") 
    thermo_obj = IdealGas.create_thermo(gas_species, thermo_file)          
    

    #Get the species composition
    mole_fracs = get_molefraction_from_xml(xmlroot,thermo_obj.molwt,gas_species)
    #Get the temperature
    T = get_value_from_xml(xmlroot,"T")
    #Get the pressire
    p = get_value_from_xml(xmlroot,"p")


    #calculation of pure species thermodynamic properties
    enthalpy = Array{Float64,1}()
    entropy = Array{Float64,1}()
    cp = Array{Float64,1}()

    enthalpy = IdealGas.H_all(thermo_obj,T)
    entropy = IdealGas.S_all(thermo_obj,T)
    cp = IdealGas.cp_all(thermo_obj,T)

    println("\nThermodynamic properties of pure species at $T(K) and $p(Pa)\n")
    println("Species \t Enthalpy(J/mol) \t Entropy(J/mol-K) \t cp(J/mol-K)\n")
    for i in eachindex(gas_species)
        @printf("%s \t\t %+.4e \t\t %+.4e \t\t %.4e \n", gas_species[i], enthalpy[i],  entropy[i],  cp[i])
    end

    #Calculation of mixture properties
    hmix = IdealGas.Hmix(thermo_obj,T,mole_fracs)
    cpmix = IdealGas.cpmix(thermo_obj,T,mole_fracs)
    gmix = IdealGas.Gmix(thermo_obj,T,p,mole_fracs)
    println("\nMixture properties\n")
    @printf("Enthalpy (J/mol): %e \n", hmix)
    @printf("Specific Heat (J/mol-K): %e \n", cpmix)
    @printf("Gibbs free energy (J/mol): %e \n ", gmix)

    return Symbol("Success")
end

# end of module
end

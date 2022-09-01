using ThermoProbe
using Test

@testset "ThermoProbe.jl" begin
    input_file = "thermo_probe.xml"
    if Sys.isapple() || Sys.islinux()
        lib_dir = "lib/"
    elseif Sys.iswindows()
        lib_dir = "lib\\"
    end 
    retcode = thermoprobe(input_file, lib_dir)
    @test retcode == Symbol("Success")
end

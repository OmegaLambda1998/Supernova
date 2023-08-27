var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/#Contents","page":"API","title":"Contents","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Pages = [\"api.md\"]\nDepth = 5","category":"page"},{"location":"api/#Supernovae-Functions","page":"API","title":"Supernovae Functions","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"CurrentModule = Supernovae","category":"page"},{"location":"api/#Public-Objects","page":"API","title":"Public Objects","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [Supernovae]\nPrivate = false","category":"page"},{"location":"api/#Supernovae.main-Tuple{AbstractString, Bool, Bool}","page":"API","title":"Supernovae.main","text":"main(toml_path::AbstractString, verbose::Bool, profile::Bool)\n\nLoads toml_path, and sets up logging with verbosity based on verbose. Runs run_Supernovae and if profile is true, also profiles the code.\n\nArguments\n\ntoml_path::AbstractString: Path to toml input file.\nverbose::Bool: Set verbosity of logging\nprofile::Bool: If true, profile run_Supernovae\n\n\n\n\n\n","category":"method"},{"location":"api/#Supernovae.main-Tuple{}","page":"API","title":"Supernovae.main","text":"main()\n\nRead the args, prepare the input TOML and run the actual package functionality. Runs main(toml_path, verbose, profile).\n\n\n\n\n\n","category":"method"},{"location":"api/#Private-Objects","page":"API","title":"Private Objects","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [Supernovae]\nPublic = false","category":"page"},{"location":"api/#Supernovae.get_args-Tuple{}","page":"API","title":"Supernovae.get_args","text":"get_args()\n\nHelper function to get the ARGS passed to julia.\n\n\n\n\n\n","category":"method"},{"location":"api/#Supernovae.RunModule-Functions","page":"API","title":"Supernovae.RunModule Functions","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"CurrentModule = Supernovae.RunModule","category":"page"},{"location":"api/#Public-Objects-2","page":"API","title":"Public Objects","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [RunModule]\nPrivate = false","category":"page"},{"location":"api/#Supernovae.RunModule.run_Supernovae-Tuple{Dict{String, Any}}","page":"API","title":"Supernovae.RunModule.run_Supernovae","text":"run_Supernovae(toml::Dict{String, Any})\n\nMain entrance function for the package\n\nArguments\n\ntoml::Dict{String, Any}: Input toml file containing all options for the package\n\n\n\n\n\n","category":"method"},{"location":"api/#Private-Objects-2","page":"API","title":"Private Objects","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [RunModule]\nPublic = false","category":"page"},{"location":"api/#Supernovae.RunModule.FilterModule-Functions","page":"API","title":"Supernovae.RunModule.FilterModule Functions","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"CurrentModule = Supernovae.RunModule.FilterModule","category":"page"},{"location":"api/#Public-Objects-3","page":"API","title":"Public Objects","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [FilterModule]\nPrivate = false","category":"page"},{"location":"api/#Supernovae.RunModule.FilterModule.Filter","page":"API","title":"Supernovae.RunModule.FilterModule.Filter","text":"Filter\n\nPhotometric filter transmission curve.\n\nFields\n\nfacility::String: Name of the filter's facility\ninstrument::String: Name of the filter's instrument\npassband::String: Name of the filter's passband\nwavelength::Vector{Å}: Transmission curve wavelength\ntransmission::Vector{Float64}: Transmission curve transmission\n\n\n\n\n\n","category":"type"},{"location":"api/#Supernovae.RunModule.FilterModule.Filter-Tuple{String, String, String, AbstractString}","page":"API","title":"Supernovae.RunModule.FilterModule.Filter","text":"Filter(facility::String, instrument::String, passband::String, filter_file::AbstractString)\n\nMake Filter object from filter_file transmission curve.\n\nArguments\n\nfacility::String: Name of the filter's facility\ninstrument::String: Name of the filter's instrument\npassband::String: Name of the filter's passband\nfilter_file::AbstractString: Path to transmission curve file. Assumed to be a comma delimited wavelength,transmission file.\n\n\n\n\n\n","category":"method"},{"location":"api/#Supernovae.RunModule.FilterModule.Filter-Tuple{String, String, String, Dict{String, Any}}","page":"API","title":"Supernovae.RunModule.FilterModule.Filter","text":"Filter(facility::String, instrument::String, passband::String, config::Dict{String, Any})\n\nMake Filter object from config options. config must include \"FILTERPATH\" => path/to/transmissioncurve. If this file exists, the transmission curve will be loaded via Filter(facility::String, instrument::String, passband::String, filter_file::AbstractString), otherwise attempt to create Filter via Filter(facility::String, instrument::String, passband::String, svo::PyCall.PyObject) and the SVO FPS database.\n\nArguments\n\nfacility::String: Name of the filter's facility\ninstrument::String: Name of the filter's instrument\npassband::String: Name of the filter's passband\nconfig::Dict{String, Any}: Options for creating a Filter.\n\n\n\n\n\n","category":"method"},{"location":"api/#Supernovae.RunModule.FilterModule.Filter-Tuple{String, String, String, PyCall.PyObject}","page":"API","title":"Supernovae.RunModule.FilterModule.Filter","text":"Filter(facility::String, instrument::String, passband::String, svo::PyCall.PyObject)\n\nMake Filter object from svo transmission curve.\n\nArguments\n\nfacility::String: Name of the filter's facility\ninstrument::String: Name of the filter's instrument\npassband::String: Name of the filter's passband\nsvo::Pycall.PyObject: SVO transmission curve\n\n\n\n\n\n","category":"method"},{"location":"api/#Supernovae.RunModule.FilterModule.synthetic_flux-Tuple{Supernovae.RunModule.FilterModule.Filter, Unitful.Quantity{Float64}}","page":"API","title":"Supernovae.RunModule.FilterModule.synthetic_flux","text":"synthetic_flux(filter::Filter, T::Unitful.Quantity{Float64})\n\nCalculates the flux of a blackbody at temperature T, as observed with the filter\n\nArguments\n\nfilter::Filter: The Filter through which the blackbody is observed\nT::Unitful.Quantity{Float64}: The temperature of the blackbody\n\n\n\n\n\n","category":"method"},{"location":"api/#Private-Objects-3","page":"API","title":"Private Objects","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [FilterModule]\nPublic = false","category":"page"},{"location":"api/#Supernovae.RunModule.FilterModule.planck-Tuple{Unitful.Quantity{Float64}, Unitful.Quantity{Float64}}","page":"API","title":"Supernovae.RunModule.FilterModule.planck","text":"planck(T::Unitful.Quantity{Float64}, λ::Unitful.Quantity{Float64})\n\nPlanck's law: Calculates the specral radiance of a blackbody at temperature T, emitting at wavelength λ\n\nArguments\n\nT::Unitful.Quantity{Float64}: Temperature of blackbody\nλ::Unitful.Quantity{Float64}: Wavelength of blackbody\n\n\n\n\n\n","category":"method"},{"location":"api/#Supernovae.RunModule.FilterModule.save_filter-Tuple{Supernovae.RunModule.FilterModule.Filter, AbstractString}","page":"API","title":"Supernovae.RunModule.FilterModule.save_filter","text":"save_filter(filter::Filter, filter_dir::AbstractString)\n\nSave filter to directory filter_dir.\n\nArguments\n\nfilter::Filter: The Filter to save.\nfilter_dir::AbstractString: The directory to save filter to.\n\n\n\n\n\n","category":"method"},{"location":"api/#Supernovae.RunModule.FilterModule.svo-Tuple{String, String, String}","page":"API","title":"Supernovae.RunModule.FilterModule.svo","text":"svo(facility::String, instrument::String, passband::String)\n\nAttempt to get filter transmission curve from SVO. Uses the python package astroquery via PyCall.\n\nArguments\n\nfacility::String: SVO name for the filter's facility\ninstrument::String: SVO name for the filter's instrument\npassband::String: SVO name for the filter's passband\n\n\n\n\n\n","category":"method"},{"location":"#Supernovae-Documentation","page":"Supernovae","title":"Supernovae Documentation","text":"","category":"section"},{"location":"","page":"Supernovae","title":"Supernovae","text":"Supernovae.jl","category":"page"},{"location":"","page":"Supernovae","title":"Supernovae","text":"","category":"page"},{"location":"#Install","page":"Supernovae","title":"Install","text":"","category":"section"},{"location":"","page":"Supernovae","title":"Supernovae","text":"using Pkg\nPkg.add(\"Supernovae\")","category":"page"}]
}

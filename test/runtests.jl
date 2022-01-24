using Supernovae
using TOML 
using Test


# Config loading tests
@testset "config" begin
    # global config
    @testset "global" begin
        # Test defaults are set correctly
        @testset "defaults" begin
            # Setup
            toml_path = "/path/to/toml"
            base_path = dirname(toml_path)
            output_path = joinpath(base_path, "Output")
            data_path = joinpath(base_path, "Data")
            filter_path = joinpath(base_path, "Filters")
            logging = false
            log_file = joinpath(output_path, "log.txt")

            toml = Dict{Any, Any}("toml_path" => toml_path) # Minimum toml 
            Supernovae.setup_global_config!(toml)
            config = toml["global"]

            # Tests
            @test config["base_path"] == base_path
            @test config["output_path"] == output_path
            @test config["data_path"] == data_path
            @test config["filter_path"] == filter_path
            @test config["logging"] == false
            @test config["log_file"] == log_file
        end

        # Test absolute paths
        @testset "absolute" begin
            # Setup
            toml_path = "/path/to/toml"
            base_path = "/path/to/base"
            output_path = "/path/to/output"
            data_path = "/path/to/data"
            filter_path = "/path/to/filter"
            logging = true
            log_file = "logging_file.txt"

            toml = Dict{Any, Any}(
                "toml_path" => toml_path,
                "global" => Dict{Any, Any}(
                    "base_path" => base_path,
                    "output_path" => output_path,
                    "data_path" => data_path,
                    "filter_path" => filter_path,
                    "logging" => true,
                    "log_file" => log_file
                )
            )
            Supernovae.setup_global_config!(toml)
            config = toml["global"]
            
            # Tests
            @test config["base_path"] == base_path
            @test config["output_path"] == output_path
            @test config["data_path"] == data_path
            @test config["filter_path"] == filter_path
            @test config["logging"] == true
            @test config["log_file"] == joinpath(output_path, log_file)
        end

        # Test relative paths
        @testset "relative" begin
            # Setup
            toml_path = "/path/to/toml"
            base_path = "base"
            output_path = "output"
            data_path = "data"
            filter_path = "filter"
            logging = true
            log_file = "logging_file.txt"

            toml = Dict{Any, Any}(
                "toml_path" => toml_path,
                "global" => Dict{Any, Any}(
                    "base_path" => base_path,
                    "output_path" => output_path,
                    "data_path" => data_path,
                    "filter_path" => filter_path,
                    "logging" => true,
                    "log_file" => log_file
                )
            )
            Supernovae.setup_global_config!(toml)
            config = toml["global"]
            
            # Tests
            base_path = joinpath(dirname(toml_path), base_path)
            @test config["base_path"] == base_path
            output_path = joinpath(base_path, output_path)
            @test config["output_path"] == output_path
            data_path = joinpath(base_path, data_path)
            @test config["data_path"] == data_path
            filter_path = joinpath(base_path, filter_path)
            @test config["filter_path"] == filter_path
            @test config["logging"] == true
            @test config["log_file"] == joinpath(output_path, log_file)
        end

    end
end

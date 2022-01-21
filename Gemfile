source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.2'

gem 'rails', '~> 6.1.4', '>= 6.1.4.4'
gem 'pg', '~> 1.1'
gem 'puma', '~> 5.0'
gem 'bootsnap', '>= 1.4.4', require: false
gem 'rack-cors'
gem 'cancancan'
gem 'devise'
gem 'simple_token_authentication', '~> 1.0' # see semver.org
gem 'devise-jwt'
gem 'jwt'
gem 'rswag'
gem 'rspec-rails'
gem 'rubocop', '>= 1.0', '< 2.0'
gem 'rswag-specs'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem 'listen', '~> 3.3'
  gem 'active_model_serializers', '~> 0.10.12', require: true
  gem 'hirb'
  gem 'react-rails'
  gem 'spring'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
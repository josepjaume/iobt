require 'sinatra/base'
require 'sinatra/assetpack'

class App < Sinatra::Base
  set :root, File.dirname(__FILE__) # You must set app root

  register Sinatra::AssetPack

  assets do
    serve '/javascripts',     from: 'assets/js'
    serve '/css',             from: 'assets/css'
    serve '/images',          from: 'assets/images'
  end

  get '/' do
    send_file 'assets/index.html'
  end
end
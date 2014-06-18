require 'sinatra/base'

class App < Sinatra::Base
  set :root,       File.dirname(__FILE__) # You must set app root
  set :public_dir, File.dirname(__FILE__) + '/assets'
  set :views,      File.dirname(__FILE__) + '/templates'

  get '/' do
    erb :index
  end
end
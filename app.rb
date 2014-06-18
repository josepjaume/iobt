require 'sinatra/base'

require_relative 'lib/pusher'

class App < Sinatra::Base
  set :root,       File.dirname(__FILE__) # You must set app root
  set :public_dir, File.dirname(__FILE__) + '/assets'
  set :views,      File.dirname(__FILE__) + '/templates'

  get '/' do
    erb :index
  end

  get '/owner' do
    erb :owner
  end

  get '/appliance' do
    erb :appliance
  end

  get '/broken' do
    Pusher['owner'].trigger('broken', {
      appliance: 'Washing Machine'
    })
  end
end
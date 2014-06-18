require 'sinatra/base'
require 'sass'
require 'compass'
require 'json'
require 'uuid'

require_relative 'lib/pusher'

class App < Sinatra::Base
  set :root,       File.dirname(__FILE__) # You must set app root
  set :public_dir, File.dirname(__FILE__) + '/assets'
  set :views,      File.dirname(__FILE__) + '/templates'
  enable :sessions

  Compass.configuration do |config|
    config.project_path = File.dirname(__FILE__)
    config.sass_dir = 'templates'
  end

  before do
    session[:iobt_id] ||= UUID.new.generate
    @id = session[:iobt_id]
  end

  get '/' do
    erb :index
  end

  get '/owner' do
    erb :owner
  end

  get '/fixer' do
    erb :fixer
  end

  get '/appliance' do
    erb :appliance
  end

  get '/broken' do
    Pusher['presence-owner'].trigger('broken', {
      appliance: 'Washing Machine'
    })
  end

  get '/stylesheets/application.css' do
    scss :'stylesheets/application'
  end

  post '/pusher/auth' do
    content_type 'text/json'
    JSON.dump Pusher[params[:channel_name]].authenticate(params[:socket_id], {
      user_id: session[:iobt_id]
    })
  end
end
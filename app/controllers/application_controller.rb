class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :getall
  
  def getall
    @countries = Country.all
  end
end
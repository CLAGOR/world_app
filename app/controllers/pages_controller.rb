class PagesController < ApplicationController
  def home
  end

  def country
    @country = Country.where(name: params[:name]).first
    #render "country.js.erb", as: "JS"
  end

  def about
  end

  def north_america
  end

  def south_america
  end

  def europe
  end

  def africa
  end

  def asia
  end

  def australia
  end
end


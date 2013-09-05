class CountriesController < ApplicationController
  
  def index
    @countries = Countries.all
    
    respond_to do |format|
      format.html
    end  
  end
end

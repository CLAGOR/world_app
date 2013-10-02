class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :getall
    
#  def set_locale
#    if params[:locale].blank?
#      I18n.locale = @locale;
#    end
#  end
  
  def getall
    @countries = Country.all
  end

#def default_url_options(options={})
#  logger.debug "default_url_options is passed options: #{options.inspect}\n"
#  { locale: I18n.locale }
#end
end
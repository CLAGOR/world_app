module PagesHelper

  def map_area country
    ret = <<-HTML
      <area shape="#{shape country.coordinates}" coords="#{country.coordinates}"
      href="#" onclick="$('##{country.name}').trigger('click'); return false" />
    HTML
    ret.html_safe
  end

  def map_link country
    link_to country.name, pages_country_path(country.name), remote: true, id: country.name
  end

  def shape coords
    coords.split(",").size == 4 ? "rect" : "poly"
  end

end

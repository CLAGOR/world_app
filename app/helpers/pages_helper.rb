module PagesHelper

  def map_area country
    ret = <<-HTML
      <area shape="#{shape country.coordinates}" coords="#{country.coordinates}" href="#"
        class="country-area" onclick="show_country('#{country.name}')"/>
    HTML
    ret.html_safe
  end

  def shape coords
    coords.split(",").size == 4 ? "rect" : "poly"
  end

end

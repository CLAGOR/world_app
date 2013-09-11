module ApplicationHelper

  def nav_link text, action
    s = <<-HTML
      <li class='#{"active" if action_name == action}'>
        #{link_to text,  send("pages_#{action}_path")}
      </li>
    HTML
    s.html_safe
  end

end

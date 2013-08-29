module ViewHelpers

  # capture for slim
  def capture_slim(&block)
    old_buffer = eval  "_buf", block.binding
    eval  "origin_buf,_buf=_buf,[]", block.binding
    capture_content = yield.to_s
    eval  "_buf=origin_buf", block.binding
    capture_content
  ensure
    eval  "_buf=origin_buf", block.binding
  end


  # yaml data
  def data
    d||=YAML.load_file(File.join(File.dirname(__FILE__), 'data.yml'))
    return d
  end


  # nav li active link
  def nav_link_to(name, href, options={})
    if href == request.path.gsub('index.html', '')
      active = "active"
    end
    content_tag(:li, link_to(name, href, options), :class => active )
  end

end

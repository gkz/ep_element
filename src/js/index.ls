require! 'ep_etherpad-lite/static/js/rjquery'.$

export ace-post-write-dom-line-HTML = (name, args) ->
  <-! $ args.node .find '.elem' .each
  cls = @class-name.split ' '
  elem = $ "<#{ [c.slice 5 for c in cls when c is /^elem:/]?0 or 'span' }>" .html @inner-HTML 
  for c in cls when /^attr-/ is c
    if /^([a-z\-]+):(\S+)/ is c.slice 5
      $ elem .attr that.1, decode-URI-component that.2
  $ this .replace-with elem
  
export ace-attribs-to-classes = (name, {key}) ->
  if /^elem$|^elem|^attr-/ is key
    [key]
  else
    []

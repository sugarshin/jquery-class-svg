do ($ = jQuery, window, document) ->
  $.fn['hasClassSVG'] = (className) ->
    return new RegExp("(\\s|^)#{className}(\\s|$)").test @[0].getAttribute 'class'

  $.fn['addClassSVG'] = (className) ->
    return @each ->
      unless $(@).hasClassSVG className
        @setAttribute 'class', "#{(if @getAttribute('class')? then @getAttribute('class') else '')} #{className}"

  $.fn['rmClassSVG'] = (className) ->
    return @each ->
      removedClass = @getAttribute('class').replace(new RegExp("(\\s|^)#{className}(\\s|$)", 'g'), '$2')
      if $(@).hasClassSVG className then @setAttribute 'class', removedClass

  $.fn['toggleClassSVG'] = (className) ->
    return @each ->
      if $(@).hasClassSVG className
        $(@).rmClassSVG className
      else
        $(@).addClassSVG className

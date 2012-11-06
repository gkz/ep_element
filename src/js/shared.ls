export collect-content-pre = (name, {cls, styl, cc, state}) ->
    if cls
      for c in cls.split ' ' when c.length
        cc.do-attrib state, c
    cc.do-attrib state, "attr-style:#{ encode-URI-component styl }" if styl

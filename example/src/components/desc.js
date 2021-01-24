import React, { memo } from 'react'
import { lang, useSyncLang } from 'react-i18n'

const Desc =()=>{
    useSyncLang();
    return  <h2 style={{ textAlign: 'center' }}>{lang.desc}</h2>
}

export default memo(Desc)

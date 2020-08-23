import React from 'react'

import { Button, Avatar } from 'components'
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg'
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg'
import { ReactComponent as InfoIcon } from 'assets/icons/info.svg'
import 'styles/components/Header.sass'

export const Header = () => (
  <header className='header'>
    <div className='header__left'>
      <Button type='primary' icon={<HomeIcon />} />
    </div>
    <h5>Logo</h5>

    <div className='header__right'>
      <Button type='primary' icon={<PlusIcon />} />
      <Button type='primary' icon={<InfoIcon />} />
      <Avatar />
    </div>
  </header>
)

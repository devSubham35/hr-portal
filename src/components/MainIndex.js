import BaseWrapper from '@/common/wrapper/BaseWrapper'
import React from 'react'

const MainIndex = ({ children }) => {
  return (
    <>
        <BaseWrapper>
            {children}
        </BaseWrapper>
    </>
  )
}

export default MainIndex
import Footer from '@components/organisms/Footer'
import React from 'react'
import { RecoilRoot } from 'recoil'

export interface IMainLayoutProps {
  readonly location: {
    pathname: string
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly children: any
}

const MainLayout: React.FC<IMainLayoutProps> = ({ location, children }) => {
  return (
    <RecoilRoot>
      {children}
      <Footer />
    </RecoilRoot>
  )
}

export default MainLayout

export const withMainLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class WithMainLayout extends React.Component<P & IMainLayoutProps> {
    render() {
      return (
        <MainLayout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </MainLayout>
      )
    }
  }

import RightSideBar from '@/components/ui/RightSideBar'
import TotalBox from '@/components/ui/TotalBox'
import React from 'react'
import Header from '../../components/ui/Header'

const Home = () => {
  const loggedIn ={firstName: 'Shreo',lastName:"Chatterjee",email:"shreyasichatterg@gmail.com"}
  return (
    <section className="home">
    <div className="home-content">
      <header className="home-header">
        <Header
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
        />
        <TotalBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={2000}
        />
      </header>
      {/* <RecentTransactions 
        accounts={accountsData}
        transactions={account?.transactions}
        appwriteItemId={appwriteItemId}
        page={currentPage}
      /> */}
    </div>

    <RightSideBar 
      user={loggedIn}
      transactions={[]}
      banks={[{},{}]}
    />
  </section>
  )
}

export default Home
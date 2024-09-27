import RightSideBar from '@/components/ui/RightSideBar'
import TotalBox from '@/components/ui/TotalBox'
import { getLoggedInUser } from '@/lib/action/user.Action'
import React from 'react'
import Header from '../../components/ui/Header'

const Home = async () => {
  const loggedIn =  await getLoggedInUser()
  return (
    <section className="home">
    <div className="home-content">
      <header className="home-header">
        <Header
          type="greeting"
          title="Welcome"
          user={loggedIn?.name || 'Guest'}
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
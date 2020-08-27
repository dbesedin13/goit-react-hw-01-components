import React from "react";
import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import Statistics from "./Stats/Stats";
import statisticalData from "./Stats/statistical-data.json";
import Friends from "./Friends/Friends";
import friends from "./Friends/friends.json";
import transactions from "./Transaction/transactions.json";
import Transaction from "./Transaction/Transaction";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Friends friends={friends} />
      <Transaction list={transactions} />
    </>
  );
}

export default App;

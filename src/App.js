
import './App.css';
import './assets/css/fontiran.css';
import Header from "./layers/Header";
import Footer from "./layers/Footer";
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./layouts/Layout";
import Home from "./components/Home";
import Game from "./components/Game";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import PaymentReceipt from "./components/PaymentReceipt";
import UserInfo from "./dashboard/UserInfo";
import Admin from "./admin/Admin";
import Users from "./admin/Users";
import User from "./admin/User";
import Transactions from "./dashboard/Transactions";
import History from "./dashboard/History";
import GameHistory from "./components/GameHistory";
import LeaderBoard from "./components/LeaderBoard";
import ArticlesArchive from "./components/ArticlesArchive";
import Article from "./components/Article";
import Questions from "./admin/Questions";
import Articles from "./admin/articles/Articles";
import Create from "./admin/articles/Create";

function App() {
    const [networkError, setNetworkError] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [user, setUser] = useState({
        loggedIn : localStorage.getItem("loggedIn"),
    });
    const meta = {
        title: 'Some Meta Title',
        description: 'I am a description, and I can create multiple tags',
        canonical: 'http://example.com/path/to/page',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'react,meta,document,html,tags'
            }
        }
    }
    // function connection(){
    //     axios.get(process.env.REACT_APP_API+"connection").then((response) => {
    //
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }

  return (

      <Router>
          <div className="App">
              {/*{networkError && (*/}
              {/*    <div className="h-100">*/}
              {/*        */}
              {/*    </div>*/}
              {/*)}*/}
              <Header
                  loginModal={loginModal}
                  setLoginModal={setLoginModal}
                  user={user}
                  setUser={setUser}
              />
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route index element={<Home user={user} setUser={setUser} loginModal={loginModal} setloginModal={setLoginModal} />} />
                      <Route path="game/:id"
                             element={<Game
                                 setNetworkError={setNetworkError}
                                 loginModal={loginModal}
                                 setloginModal={setLoginModal} />}
                      />
                      <Route path="games/history" element={<GameHistory />} />
                      <Route path="articles/archive" element={<ArticlesArchive />} />
                      <Route path="article/:slug" element={<Article setloginModal={setLoginModal}/>} />
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="leaderboard" element={<LeaderBoard />} />
                      <Route path="dashboard/info" element={<UserInfo/>} />
                      <Route path="dashboard/transactions" element={<Transactions/>} />
                      <Route path="dashboard/history" element={<History/>} />
                      <Route path="verify/zarinpal/:id" element={<PaymentReceipt />} />
                      <Route path="admin" element={<Admin />} />
                      <Route path="admin/users" element={<Users/>}/>
                      <Route path="admin/users/:id" element={<User/>}/>
                      <Route path="admin/faq" element={<Questions/>}/>
                      <Route path="admin/articles" element={<Articles/>}/>
                      <Route path="admin/articles/add" element={<Create/>}/>
                      <Route path="admin/articles/edit" element={<Questions/>}/>
                      <Route path="admin/transictions/" element={<User/>}/>
                      <Route path="admin/categories/" element={<User/>}/>
                      <Route path="admin/characters/" element={<User/>}/>
                      <Route path="admin/characters/:id" element={<User/>}/>
                      <Route path="admin/scenarios" element={<User/>}/>
                      <Route path="admin/scenarios/:id" element={<User/>}/>
                      <Route path="admin/sliders" element={<User/>}/>
                      <Route path="admin/landing" element={<User/>}/>
                      <Route path="admin/comments" element={<User/>}/>
                      <Route path="admin/pages" element={<User/>}/>
                      <Route path="admin/contacts" element={<User/>}/>
                  </Route>
                  {/* Add a fallback route to catch unmatched routes */}
                  <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer user={user} setUser={setUser} loginModal={loginModal} setloginModal={setLoginModal}/>
          </div>
      </Router>
  );
}

export default App;

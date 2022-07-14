import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostCurrentComment from "./components/PostCurrentComment";


function App() {
    return (
        <div className="App">
            <div>
                <h2>MENU</h2>
                <ul>
                    <li><Link to={'todos'}>TODOS</Link></li>
                    <li><Link to={'albums'}>ALBUMS</Link></li>
                    <li><Link to={'comments'}>COMMENTS</Link></li>

                </ul>
            </div>

            <Routes>
                <Route path={'/todos'} element={<TodosPage/>}/>
                <Route path={'/albums'} element={<AlbumsPage/>}/>
                <Route path={'/comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<PostCurrentComment/>}/>
                </Route>


            </Routes>

        </div>
    );
}

export default App;

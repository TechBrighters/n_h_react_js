import { Link, Route, BrowserRouter, Routes, NavLink, MemoryRouter, HashRouter } from 'react-router-dom';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';
import RouteComp from './RouteComp';
import ChildRoute from './ChildRoute';
import PageNotFound from './PageNotFound';

const MainRoute = () => {
    return(
        <>
            <BrowserRouter>
                <Link to="/class">Class Component</Link> | 
                <Link to="/function"> Function Component</Link> | 
                {/* <Link to="/route/50/active"> Route Component</Link> */}
                {/* <NavLink to="/route" style={({isActive}) => {return {color: isActive ? 'green' : 'red' }}} className ='App-link'>Route Comp</NavLink> */}
                <Link to={{
                    hash: '#hello',
                    pathname:'/route',
                    search:'id=40&price=400',
                    state:{name:'test'}
                }}>Route Component</Link>
                <Link to="/*"></Link>
                <Routes>
                    <Route path="/class" Component={ ClassComp }></Route>
                    <Route path="/function" element={ <FuncComp></FuncComp>}></Route>
                    {/* <Route path="/route/:id/:status" Component={ RouteComp }> */}
                    <Route path='/route/' Component={ RouteComp }>
                        <Route path='childr' Component={ ChildRoute }></Route>
                    </Route>
                    <Route path='/*' Component={ PageNotFound }></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MainRoute;
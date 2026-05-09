import { Route, useParams, useSearchParams, useNavigate, Outlet, Link, useLocation, useMatch } from "react-router-dom"


const RouteComp = () => {
    // let { id } = useParams();
    // console.log(id)
    console.log('match',useMatch('/route'));
    // let matchObj = useMatch('/route')
    // if(matchObj){

    // }else{
    //     navigate('/function')
    // }
    console.log(useSearchParams())
    console.log('location',useLocation())
    let locationObj = useLocation();
    let [searchParam, setSearchParams] = useSearchParams();
    console.log(searchParam.get('name'));
    console.log(searchParam.get('price'));
    //setSearchParams({name:'Demo',price:'500',status:1})
    let params = useParams();
    let navigate = useNavigate();
    // if(searchParam.get('name') == 'test'){
    //     console.log('here');
    //     navigate('/class');
    // }else{console.log('else')
    //     navigate('/function')
    // }
    return(
        <>
            <h2>Route Comp</h2>
            <strong>{params.id}---{params.status}</strong>
            <b>{locationObj.pathname}</b>
            <Link to="childr">Child Route</Link>
            <Outlet></Outlet>
        </>
    )
}
export default RouteComp;